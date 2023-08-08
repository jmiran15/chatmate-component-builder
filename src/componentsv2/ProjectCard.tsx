import React from "react";
import { Anchor, Card, Group, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { UUID } from "../reducers/graph-reducer";

export interface Project {
  id: UUID;
  name: string;
  created_at: string;
}

export function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/projects/${project.id}`);
  }

  return (
    <Card withBorder radius="md" padding="md" onClick={handleClick}>
      <Group position="apart">
        <Anchor size="xl">{project.name}</Anchor>
        <Text size="sm" color="dimmed">
          {project.created_at}
        </Text>
      </Group>
    </Card>
  );
}
