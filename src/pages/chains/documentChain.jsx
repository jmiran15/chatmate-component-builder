import {
  Stack,
  TextInput,
  Group,
  Tooltip,
  Button,
  NumberInput,
  FileInput,
} from "@mantine/core";
import { useState, useRef, useEffect } from "react";
import FilesTable from "../../components/filesTable";

import MentionsEditor from "../../components/mentionsEditor";
import { insert, fetchTable, deleteTable } from "../../utils/supabase";

export default function DocumentChain({
  node,
  updateNode,
  deleteNode,
  state,
  getAvailableDependencies,
  chatChainIds,
  addDependency,
}) {
  const [files, setFiles] = useState([]);
  const [fetchedDocuments, setFetchedDocuments] = useState([]);
  const [name, setName] = useState(node.name);
  const [numDocs, setNumDocs] = useState(node.numberOfDocuments);
  const [similarityThreshold, setSimilarityThreshold] = useState(
    node.similarityThreshold
  );
  const [splitThreshold, setSplitThreshold] = useState();
  let searchQuery = node.searchQuery;

  let rteQuery = useRef(null);

  let availableVariables = [
    {
      name: "user_input",
      id: undefined,
    },
    ...getAvailableDependencies(node.id).map((id) => {
      return {
        name: state.nodes[id].name,
        id,
      };
    }),
  ];
  let availableChains = chatChainIds;

  let tableId = node.tableId;

  useEffect(() => {
    fetchTable(tableId).then((res) => {
      setFetchedDocuments(res);
    });
    return () => {
      console.log("document chain unmounted");
    };
  }, []);

  function getInnerStrings(str) {
    const regex =
      /<span contenteditable="false" class="e-mention-chip">([\s\S]*?)<\/span>/g;
    let match;
    let matches = [];

    while ((match = regex.exec(str)) !== null) {
      matches.push(match[1]);
    }

    return matches;
  }

  function onSave() {
    let searchQuery = rteQuery.current.cloneValue;

    updateNode({
      nodeId: node.id,
      name,
      numberOfDocuments: numDocs,
      similarityThreshold,
      searchQuery,
      tableId,
    });

    let searchQueryDependenciesNames = getInnerStrings(searchQuery);

    searchQueryDependenciesNames.forEach((name) => {
      let id = availableVariables.find((variable) => variable.name === name).id;
      if (!id) return;
      addDependency(node.id, id);
    });
  }

  function onDelete() {
    deleteTable(tableId).then((res) => {
      setFetchedDocuments([]);
    });
  }

  function onDeleteComponent() {
    deleteNode(node.id);
    onDelete();
  }

  function onClear() {
    setFiles([]);
  }

  function onUpload() {
    sendFiles(files, process.env.REACT_APP_UNSTRUCTURED_API_KEY).then(
      (data) => {
        let documents = formatPartitions(data, files.length);
        let splitDocs = [];

        // split documents if they are too long
        for (let i = 0; i < documents.length; i++) {
          let splitDocuments = stringSplitter(
            documents[i].content,
            splitThreshold
          ); // returns an array of contents
          splitDocuments.forEach((content, idx) => {
            splitDocs.push({
              content,
              metadata: {
                ...documents[i].metadata,
                filename: documents[i].metadata.filename + "-" + idx,
              },
            });
          });
        }

        console.log({ splitDocs });

        insert(documents, tableId)
          .then((data) => {
            fetchTable(tableId).then((res) => {
              setFetchedDocuments(res);
            });
          })
          .catch((error) => console.error("An error occurred: ", error));
      }
    );
  }

  // document list is a supabase fetch to all documents with the table id

  return (
    <Stack align="flex-start">
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
        value={numDocs}
        onChange={setNumDocs}
        disabled={true}
      />
      <NumberInput
        label="Similarity threshold"
        defaultValue={0.7}
        precision={2}
        min={0.1}
        step={1.0}
        value={similarityThreshold}
        onChange={setSimilarityThreshold}
        disabled={true}
      />
      <MentionsEditor
        id={"document"}
        nodeId={node.id}
        rteObj={rteQuery}
        value={searchQuery}
        label={"Search query"}
        variables={availableVariables}
        state={state}
      />
      <NumberInput
        label="Split documents once they reach this character limit"
        defaultValue={1000}
        precision={0}
        min={0}
        step={1}
        value={splitThreshold}
        onChange={setSplitThreshold}
      />

      <Group>
        <FileInput
          value={files}
          onChange={setFiles}
          placeholder="Select files to upload"
          multiple
        />
        <Button onClick={onUpload}>Upload selected files</Button>
        <Button onClick={onClear}>Clear selected files</Button>
        <Button variant="light" color="red" onClick={onDelete}>
          Delete all files from database
        </Button>
      </Group>
      <FilesTable data={fetchedDocuments} />
      <Group w="100%" position="apart">
        <Tooltip label="Delete this chain">
          <Button variant="light" color="red" onClick={onDeleteComponent}>
            Delete
          </Button>
        </Tooltip>
        <Tooltip label="Save this chain">
          <Button onClick={onSave}>Save</Button>
        </Tooltip>
      </Group>
    </Stack>
  );
}

const sendFiles = async (files, apiKey) => {
  const url =
    "http://cors-anywhere.herokuapp.com/https://api.unstructured.io/general/v0/general";
  const formData = new FormData();

  files.forEach((file, index) => {
    formData.append("files", file, file.name);
  });

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "unstructured-api-key": apiKey,
    },
    body: formData,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.json();
  }
};

// nested array of objects
// returns an array of actual documents with content and metadata
function formatPartitions(documents, length) {
  let formattedDocuments = [];

  if (length === 1) {
    formattedDocuments.push({
      metadata: {
        filetype: documents[0].metadata.filetype,
        filename: documents[0].metadata.filename,
      },
      content: documents.map((partition) => partition.text).join(" "),
    });
  } else {
    documents.forEach((document) => {
      formattedDocuments.push({
        metadata: {
          filetype: document[0].metadata.filetype,
          filename: document[0].metadata.filename,
        },
        content: document.map((partition) => partition.text).join(" "),
      });
    });
  }

  return formattedDocuments;
}

function stringSplitter(str, threshold) {
  const resultArr = [];
  if (str.length > threshold) {
    for (let i = 0; i < str.length; i += threshold) {
      resultArr.push(str.slice(i, i + threshold));
    }
  } else {
    resultArr.push(str);
  }
  return resultArr;
}
