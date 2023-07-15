import { FileInput, Card, Text, Stack, Button } from "@mantine/core";
import { useState } from "react";

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

export default function Documents() {
  const [files, setFiles] = useState([]);
  const [documents, setDocuments] = useState([]);

  console.log("files: ", files);

  function onResetFiles() {
    setFiles([]);
  }

  function onUploadFiles() {
    console.log("uploading files: ", files);
    console.log("apiKey: ", process.env.REACT_APP_UNSTRUCTURED_API_KEY);
    sendFiles(files, process.env.REACT_APP_UNSTRUCTURED_API_KEY)
      .then((data) => console.log(data))
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
      <Button onClick={onUploadFiles}>Upload</Button>
      <Button onClick={onResetFiles}>Reset file input</Button>
      <Button>Clear all files</Button>
      {documents.length > 0 && (
        <Stack direction="vertical" spacing="xs">
          <Text>Uploaded documents:</Text>
          {documents.map((document, idx) => (
            <DocumentCard key={idx} filename="Document 1" />
          ))}
        </Stack>
      )}
    </Stack>
  );
}

function DocumentCard({ filename }) {
  return (
    <Card withBorder paddind="md" shadow="sm">
      <Text size="xl">{filename}</Text>
    </Card>
  );
}
