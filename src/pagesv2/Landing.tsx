import React from "react";
import { Stack, Text, Button, Center, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Center px={300} py={100}>
      <Stack align="flex-start">
        <Title order={1}>Create and discover new chatbots</Title>
        <Text size="lg" color="dimmed">
          With chatmate.dev you can combine multiple gpt4 chatbots with vector
          document retrievals to create complex multi-chain chatbots. You can
          share your chatbots and discover new ones from the community.
        </Text>
        <Button
          size="lg"
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          onClick={() => navigate("/sign-up")}
        >
          Get started
        </Button>
      </Stack>
    </Center>
  );
}
