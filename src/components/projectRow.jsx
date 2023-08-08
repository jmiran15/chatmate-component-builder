import { Card, Text } from "@mantine/core";

export default function ProjectRow({ projectTitle }) {
  return (
    <Card withBorder padding="lg" radius="lg">
      <Text size="lg">{projectTitle}</Text>
    </Card>
  );
}
