import { FileInput, Card, Text, Stack, Button, Group } from "@mantine/core";
import { useState } from "react";
import { insert } from "../utils/supabase";

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
  console.log("length: ", length);
  console.log("documents: ", documents);

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

export default function Documents() {
  const [files, setFiles] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("files: ", files);

  function onResetFiles() {
    setFiles([]);
    setDocuments([]);
  }

  // push to supabase essentially clears out the entire db and then redoes it
  function onPushToSupabase() {
    console.log("pushing to supabase: ", documents);
    setLoading(true);
    insert(documents).then((data) => {
      console.log("data: ", data);
      setLoading(false);
    });
  }

  function onUploadFiles() {
    setLoading(true);
    sendFiles(files, process.env.REACT_APP_UNSTRUCTURED_API_KEY)
      .then((data) => {
        setLoading(false);
        setDocuments(formatPartitions(data, files.length));
      })
      .catch((error) => console.error("An error occurred: ", error));
  }

  return (
    <Stack align="flex-start">
      <FileInput
        value={files}
        onChange={setFiles}
        label="Upload files"
        placeholder="Upload files"
        multiple
      />
      <Group>
        <Button onClick={onUploadFiles} disabled={loading}>
          Upload
        </Button>
        <Button onClick={onResetFiles} disabled={loading}>
          Clear
        </Button>
        <Button
          disabled={documents.length > 0 ? false : loading ? true : false}
          onClick={onPushToSupabase}
        >
          Push to supabase
        </Button>
      </Group>
      {documents.length > 0 && (
        <Stack direction="vertical" spacing="xs">
          <Text>Uploaded documents:</Text>
          {documents.map((document, index) => (
            <DocumentCard key={index} document={document} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}

function DocumentCard({ document }) {
  return (
    <Card withBorder paddind="md" shadow="sm">
      <pre>{JSON.stringify(document.metadata, null, 2)}</pre>
      <Text size="xl">{document.content}</Text>
    </Card>
  );
}
