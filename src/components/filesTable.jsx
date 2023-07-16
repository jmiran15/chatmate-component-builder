import { Table, Group, Text, ActionIcon, Anchor } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

export default function FilesTable({ data }) {
  const rows = data.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>
        <Anchor href="#">{item.metadata.filename}</Anchor>
      </td>

      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconPencil size="1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon color="red">
            <IconTrash size="1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "300px",
        overflowY: "scroll",
      }}
    >
      <Table verticalSpacing="xs">
        <thead>
          <tr>
            <th>id</th>
            <th>file name</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}
