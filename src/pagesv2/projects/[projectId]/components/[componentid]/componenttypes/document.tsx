"use strict";

import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  DOCUMENT_TYPE,
  Document as DocumentComponentInterface,
  UUID,
} from "../../../../../../reducers/graph-reducer";
import { useGraph } from "../../../../../../contextv2/graph";
import { supabaseClient } from "../../../../../../utilsv2/supabase";
import {
  USER_INPUT_UUID,
  getAvailableDependencies,
  htmlToPlaceholder,
  placeholderToHtml,
} from "../../../../../../utilsv2/helpers";
import { useParams } from "react-router-dom";
import {
  Button,
  Group,
  NumberInput,
  Stack,
  TextInput,
  Tooltip,
  FileInput,
  FileInputProps,
  Center,
  rem,
} from "@mantine/core";
import MentionsEditor from "../../../../../../componentsv2/MentionsEditor";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { embed } from "../../../../../../utilsv2/openai";
import { v4 as uuidv4 } from "uuid";
import {
  IconFileTypePdf,
  IconFileTypeTxt,
  IconFileTypeHtml,
  IconFileTypeCsv,
  IconJson,
  IconMarkdown,
  IconFile,
} from "@tabler/icons-react";

// import { embed, openai } from "@/utils/openai"

export interface DocumentMetadata {
  file: string;
}

export interface DocumentInterface {
  id: UUID;
  name: string;
  metadata: DocumentMetadata;
  embedding: number[];
  content: string;
  component: UUID;
  created_at: string;
}

export default function Document({
  component,
}: {
  component: DocumentComponentInterface;
}) {
  const { state, dispatch } = useGraph();
  let availableVariables = [
    {
      name: "User input",
      id: USER_INPUT_UUID,
    },
    ...getAvailableDependencies(state, component.id).map((id) => {
      return {
        name: state[id].name,
        id,
      };
    }),
  ];
  const { componentid } = useParams();
  let componentId = component.id;
  const [name, setName] = useState<string>(component.name);
  const [numberDocuments, setNumberDocuments] = useState<number>(
    component.number_documents
  );
  const [similarityThreshold, setSimilarityThreshold] = useState<number>(
    component.similarity_threshold
  );
  let searchQuery = useMemo(() => {
    return placeholderToHtml(component.search_query, {
      ...state,
      [USER_INPUT_UUID]: {
        name: "User input",
        id: USER_INPUT_UUID,
      },
    });
  }, [component.search_query, state]);
  const search = useRef(null);
  const [documents, setDocuments] = useState<DocumentInterface[]>([]);

  const gridRef = useRef();
  const containerStyle = useMemo(
    () => ({ width: "100%", height: "100vh" }),
    []
  );
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "File name",
      field: "file",
      valueGetter: (params) => params.data.metadata.file,
      headerCheckboxSelection: true,
      checkboxSelection: true,
    },
    {
      headerName: "Created At",
      field: "created_at",
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
    };
  }, []);

  const onGridReady = useCallback(
    (params) => {
      supabaseClient
        .from("documents")
        .select("*")
        .eq("component", component.id)
        .then(({ data, error }) => {
          if (error) {
            console.log(error);
          } else {
            console.log({ data });
            setDocuments(data as DocumentInterface[]);
          }
        });
    },
    [component.id]
  );

  console.log({ documents });

  function handleSave() {
    let component = {
      name,
      number_documents: numberDocuments,
      similarity_threshold: similarityThreshold,
      search_query: htmlToPlaceholder(search.current.getHtml()),
    };

    supabaseClient
      .from("document_components")
      .update(component)
      .eq("id", componentId)
      .select()
      .then(({ data, error }) => {
        if (error) {
          console.log(error);
          return;
        } else {
          console.log(data);
        }
      });

    dispatch({
      type: "EDIT_NODE",
      payload: {
        id: componentId as UUID,
        type: DOCUMENT_TYPE,
        ...component,
      },
    });
  }

  return (
    <Stack w="100%">
      <TextInput
        label="Component name"
        placeholder="New document retrieval component"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <NumberInput
        label="Number of documents to retrieve"
        defaultValue={1}
        precision={0}
        min={0}
        step={1}
        value={numberDocuments}
        onChange={setNumberDocuments}
      />
      <NumberInput
        label="Similarity threshold"
        defaultValue={0.7}
        precision={2}
        min={0.1}
        step={1.0}
        value={similarityThreshold}
        onChange={setSimilarityThreshold}
      />
      <MentionsEditor
        label="Search query"
        object={search}
        value={searchQuery}
        data={availableVariables}
      />
      <Group>
        <FileUpload component={component} setDocuments={setDocuments} />
        <Button variant="light" color="red" onClick={() => {}}>
          Delete selected document/s
        </Button>
      </Group>
      <div style={containerStyle}>
        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            ref={gridRef}
            rowData={documents}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowSelection={"multiple"}
            suppressRowClickSelection={true}
            onGridReady={onGridReady}
          />
        </div>
      </div>
      <Group w="100%" position="apart">
        <Tooltip label="Delete this chain">
          <Button variant="light" color="red" onClick={() => {}}>
            Delete
          </Button>
        </Tooltip>
        <Tooltip label="Save this chain">
          <Button onClick={handleSave}>Save</Button>
        </Tooltip>
      </Group>
    </Stack>
  );
}

const FileUpload = ({
  component,
  setDocuments,
}: {
  component: DocumentComponentInterface;
  setDocuments: React.Dispatch<React.SetStateAction<DocumentInterface[]>>;
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  // if submission was successful, update the state (clear selected files)
  // TODO - SCROLL AREA WHEN TOO MANY FILES (OR SHOW NUMBER)
  // TODO - ADD CLOSE TO VALUE COMPONENTS SO THAT YOU CAN REMOVE A FILE FROM SELECTED
  // TODO - ADD ACCEPT FILE TYPES

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (files) {
  //     setSelectedFiles(Array.from(files));
  //   }
  // };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      alert("No files selected");
      return;
    }

    try {
      const formData = new FormData();
      // append each file to formData
      selectedFiles.forEach((file) => {
        console.log({ file });
        formData.append("files", file);
        formData.append("filenames", file.name);
      });

      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const { files } = await response.json();
      console.log({ files });

      // we have all the files data

      // splitting large files into chunks
      let chunkSize = 1000;
      let overlap = 200;
      let chunks = files
        .map((file: { content: string; file: string }) => {
          let tokens = file.content.split(/\s/);
          if (tokens.length > chunkSize) {
            return splitTextByToken(file.content, chunkSize, overlap)?.map(
              (content) => {
                return {
                  content,
                  metadata: { file: file.file },
                };
              }
            );
          } else {
            return {
              content: file.content,
              metadata: { file: file.file },
            };
          }
        })
        .flat();

      // embedd chunks
      let embeddings = await Promise.all(
        chunks.map((chunk: { content: string; metadata: { file: string } }) =>
          embed(chunk.content)
        )
      );

      console.log({ embeddings });

      chunks = chunks.map(
        (
          chunk: {
            content: string;
            metadata: { file: string };
          },
          index: number
        ) => {
          return {
            ...chunk,
            id: uuidv4(),
            embedding: embeddings[index].data[0].embedding,
            component: component.id,
          };
        }
      );

      console.log({ chunks });

      // push to supabase
      supabaseClient
        .from("documents")
        .insert(chunks)
        .select("*")
        .then(({ data, error }) => {
          if (error) {
            console.log(error);
          }
          if (data) {
            setDocuments((documents) => [
              ...documents,
              ...(data as DocumentInterface[]),
            ]);
          }
        });

      // update state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Group>
        <FileInput
          placeholder="Multiple"
          multiple
          valueComponent={ValueComponent}
          value={selectedFiles}
          onChange={setSelectedFiles}
        />
        <Button type="submit">Upload</Button>
      </Group>
    </form>
  );
};

function Value({ file }: { file: File }) {
  let fileExtension = file.name.split(".").pop();

  let Icon = () => {
    switch (fileExtension) {
      case "pdf":
        return (
          <IconFileTypePdf size={rem(14)} style={{ marginRight: rem(5) }} />
        );
      case "txt":
        return (
          <IconFileTypeTxt size={rem(14)} style={{ marginRight: rem(5) }} />
        );
      case "csv":
        return (
          <IconFileTypeCsv size={rem(14)} style={{ marginRight: rem(5) }} />
        );
      case "html":
        return (
          <IconFileTypeHtml size={rem(14)} style={{ marginRight: rem(5) }} />
        );
      case "json":
        return <IconJson size={rem(14)} style={{ marginRight: rem(5) }} />;
      case "md":
        return <IconMarkdown size={rem(14)} style={{ marginRight: rem(5) }} />;
      case "mdx":
        return <IconMarkdown size={rem(14)} style={{ marginRight: rem(5) }} />;
      default:
        return <IconFile size={rem(14)} style={{ marginRight: rem(5) }} />;
    }
  };

  return (
    <Center
      inline
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[1],
        fontSize: theme.fontSizes.xs,
        padding: `${rem(3)} ${rem(7)}`,
        borderRadius: theme.radius.sm,
      })}
    >
      <Icon />
      <span
        style={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          maxWidth: rem(200),
          display: "inline-block",
        }}
      >
        {file.name}
      </span>
    </Center>
  );
}

const ValueComponent: FileInputProps["valueComponent"] = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <Group spacing="sm" py="xs">
        {value.map((file, index) => (
          <Value file={file} key={index} />
        ))}
      </Group>
    );
  }

  return <Value file={value} />;
};

function splitTextByToken(input: string, chunkSize: number, overlap: number) {
  if (overlap >= chunkSize) {
    throw new Error("Overlap size should be less than the chunk size");
  }

  const tokens = input.split(/\s/);
  if (chunkSize > tokens.length) {
    return;
  }

  const chunks = [];
  let chunkStart = 0;

  while (chunkStart <= tokens.length - chunkSize) {
    const chunk = tokens.slice(chunkStart, chunkStart + chunkSize);
    chunks.push(chunk.join(" "));
    chunkStart += chunkSize - overlap;
  }

  return chunks;
}
