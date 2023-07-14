import {
  Button,
  Card,
  Flex,
  Group,
  Stack,
  TextInput,
  Text,
  Space,
  NativeSelect,
} from "@mantine/core";
import React, { useState } from "react";

export default function List({ state, dispatch }) {
  return (
    <Stack
      align="flex-start"
      style={{
        overflow: "auto",
      }}
    >
      {state.map((row, i) => (
        <Group key={i} noWrap>
          {row.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              dispatch={dispatch}
              allItems={state}
            />
          ))}
          <Button onClick={() => dispatch({ type: "addItem", payload: i })}>
            + Add
          </Button>
        </Group>
      ))}
      <Button onClick={() => dispatch({ type: "addRow" })} w={400}>
        + Add
      </Button>
    </Stack>
  );
}

function ListItem({ item, dispatch, allItems }) {
  const [name, setName] = useState(item.name);
  const [system, setSystem] = useState(item.system);
  const [user, setUser] = useState(item.user);
  const [chain, setChain] = useState(item.chain);

  let availableVariables = allItems
    .slice(
      0,
      allItems.findIndex((row) => row.some((elem) => elem.id === item.id))
    )
    .flat()
    .map((item) => item.id);

  let availableChainIDs = allItems.flat().map((item) => item.id);

  const handleSave = () => {
    dispatch({
      type: "updateItem",
      payload: {
        id: item.id,
        name,
        system,
        user,
        chain,
      },
    });
  };
  const handleDelete = () => {
    dispatch({ type: "deleteItem", payload: item.id });
  };

  return (
    <Card withBorder padding="lg" radius="lg" w={400}>
      <div>
        <Text size="lg">id: {item.id}</Text>
        <Text size="lg">name: {item.name}</Text>
        <Text size="lg">system: {item.system}</Text>
        <Text size="lg">user: {item.user}</Text>
        <Text size="lg">chain: {item.chain}</Text>
      </div>
      <pre
        style={{
          overflowX: "auto",
        }}
      >
        <code>{JSON.stringify(availableVariables, null, 2)}</code>
      </pre>
      <Space />
      <Flex id={item.id} direction="column" gap="xs">
        <TextInput
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="system"
          value={system}
          onChange={(e) => setSystem(e.target.value)}
        />
        <TextInput
          label="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <NativeSelect
          label="chain"
          value={chain}
          onChange={(e) => setChain(e.currentTarget.value)}
          data={availableChainIDs}
        />
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </Flex>
    </Card>
  );
}
