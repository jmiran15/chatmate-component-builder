import React from "react";
import { Anchor, Card, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Chat, Document } from "../reducers/graph-reducer";

export default function ComponentCard({
  component,
}: {
  component: Chat | Document;
}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`${component.id}`);
  }

  return (
    <Card withBorder radius="md" padding="md" onClick={handleClick}>
      <Group>
        <Anchor size="xl">{component.name}</Anchor>
      </Group>
    </Card>
  );
}
