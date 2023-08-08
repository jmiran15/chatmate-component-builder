import { Button, Stack, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabaseClient } from "../../../../utilsv2/supabase";

export default function Settings() {
  const { projectid } = useParams<{ projectid: string }>();
  const [name, setName] = useState<string>("");

  console.log("settings: ", { projectid });

  useEffect(() => {
    supabaseClient
      .from("projects")
      .select("name")
      .eq("id", projectid)
      .then(({ data }) => {
        setName(data[0].name);
      });
  }, []);

  function handleSave() {
    supabaseClient
      .from("projects")
      .update({ name })
      .eq("id", projectid)
      .select("name")
      .then(({ data }) => setName(data[0].name));
  }

  return (
    <Stack w="100%">
      <TextInput
        label="Project name"
        placeholder="project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleSave}>Save</Button>
    </Stack>
  );
}
