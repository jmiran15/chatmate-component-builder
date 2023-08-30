// grid showing all the bots

import { Card, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { supabaseClient } from "../utilsv2/supabase";
import { useEffect, useState } from "react";

export default function Discover() {
  // fetch all the projects in "published"
  const [chatbots, setChatbots] = useState<any[]>([]);

  useEffect(() => {
    supabaseClient
      .from("published")
      .select("*")
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
        } else {
          setChatbots(data);
        }
      });
  }, []);

  return (
    <Stack w="100%" p="xl">
      {chatbots.map((chatbot) => (
        <Card withBorder padding="xl" radius="md">
          <Text>{chatbot.name}</Text>
          <Link to={`/b/${chatbot.name}`}>
            {`https://www.chatmate.dev/b/${chatbot.name}`}
          </Link>
        </Card>
      ))}
    </Stack>
  );
}
