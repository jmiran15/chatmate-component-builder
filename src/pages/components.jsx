import {
  Button,
  Card,
  Flex,
  Group,
  Stack,
  TextInput,
  Space,
  NativeSelect,
  Textarea,
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
            <>
              {item.type === "chat" ? (
                <ListItem
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                  allItems={state}
                />
              ) : (
                <DocumentItem key={item.id} item={item} dispatch={dispatch} />
              )}
            </>
          ))}
          <Button onClick={() => dispatch({ type: "addItem", payload: i })}>
            + Add chat chain
          </Button>
          <Button
            onClick={() =>
              dispatch({
                type: "addDocument",
                payload: i,
              })
            }
          >
            + Add document retrieval
          </Button>
        </Group>
      ))}
      <Button onClick={() => dispatch({ type: "addRow" })} w={400}>
        + Add chat chain
      </Button>
      <Button onClick={() => dispatch({ type: "addDocumentRow" })} w={400}>
        + Add document retrieval
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
    <Card withBorder padding="lg" radius="lg" w={600}>
      <pre
        style={{
          overflowX: "auto",
        }}
      >
        <code>
          {JSON.stringify(
            {
              ...item,
              availableVariables,
            },
            null,
            2
          )}
        </code>
      </pre>
      <Space />
      <Flex id={item.id} direction="column" gap="xs">
        <TextInput
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          label="system message"
          autosize
          minRows={2}
          maxRows={4}
          value={system}
          onChange={(e) => setSystem(e.target.value)}
        />

        <Textarea
          label="user message"
          autosize
          minRows={2}
          maxRows={4}
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

function DocumentItem({ item, dispatch }) {
  const [query, setQuery] = useState(item.query);
  const [name, setName] = useState(item.name);
  // chain id refers to that output

  const handleSave = () => {
    dispatch({
      type: "updateDocument",
      payload: {
        id: item.id,
        name,
        query,
      },
    });
  };
  const handleDelete = () => {
    dispatch({ type: "deleteItem", payload: item.id });
  };

  return (
    <Card withBorder padding="lg" radius="lg" w={600}>
      <pre
        style={{
          overflowX: "auto",
        }}
      >
        <code>
          {JSON.stringify(
            {
              ...item,
            },
            null,
            2
          )}
        </code>
      </pre>
      <TextInput
        label="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        label="search query"
        autosize
        minRows={2}
        maxRows={4}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </Card>
  );
}
