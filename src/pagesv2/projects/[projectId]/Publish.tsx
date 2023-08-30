import { Stack, Group, Text, TextInput, Button } from "@mantine/core";
import { supabaseClient } from "../../../utilsv2/supabase";
import { useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Publish() {
  const [name, setName] = useState("");
  const { userId } = useAuth();
  const { projectId } = useParams();

  useEffect(() => {
    supabaseClient
      .from("published")
      .select("*")
      .eq("project", projectId)
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
        } else {
          if (data.length > 0) setName(data[0].name);
        }
      });
  }, [projectId]);

  async function handlePublish() {
    // upsert into the published table

    const { data, error } = await supabaseClient
      .from("published")
      .upsert({ project: projectId, name, user: userId })
      .select();

    console.log(data, error);
  }

  return (
    <Stack align="flex-start" w="100%">
      <Group spacing="xs">
        <Text color="dimmed">https://www.chatmate.dev/b/</Text>
        <TextInput
          placeholder="project-name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </Group>
      <Button color="blue.9" size="md" radius="md" onClick={handlePublish}>
        Save
      </Button>
    </Stack>
  );
}
