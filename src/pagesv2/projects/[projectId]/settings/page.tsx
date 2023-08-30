import { Button, Group, Stack, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabaseClient } from "../../../../utilsv2/supabase";

export default function Settings() {
  const { projectId } = useParams<{ projectId: string }>();
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    supabaseClient
      .from("projects")
      .select("name")
      .eq("id", projectId)
      .then(({ data }) => {
        setName(data![0].name);
      });
  }, [projectId]);

  function handleSave() {
    supabaseClient
      .from("projects")
      .update({ name })
      .eq("id", projectId)
      .select("name")
      .then(({ data }) => setName(data![0].name));
  }

  function handleDelete() {
    supabaseClient
      .from("projects")
      .delete()
      .eq("id", projectId)
      .then(({ error }) => console.log("delete: ", { error }));
    navigate("/projects");
  }

  return (
    <Stack w="100%">
      <TextInput
        label="Project name"
        placeholder="project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Group position="apart">
        <Button onClick={handleDelete} color="red" variant="light">
          Delete project
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </Group>
    </Stack>
  );
}
