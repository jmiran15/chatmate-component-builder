import { Tabs } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
import Chat from "./pages/chat";
import List from "./pages/components";
import Documents from "./pages/documents";

function listReducer(state, action) {
  switch (action.type) {
    case "addRow":
      let id = uuidv4();
      return [
        ...state,
        [
          {
            id,
            type: "chat",
            name: "New chain",
            system: "You are a helpful assistant.",
            user: "{query}",
            chain: id,
          },
        ],
      ];
    case "addDocumentRow":
      let id0 = uuidv4();
      return [
        ...state,
        [
          {
            id: id0,
            type: "document",
            name: "New document retrieval",
            query: "{query}",
          },
        ],
      ];
    case "addItem":
      let id2 = uuidv4();
      return state.map((row, i) =>
        i === action.payload
          ? [
              ...row,
              {
                id: id2,
                type: "chat",
                name: "New chain",
                system: "You are a helpful assistant.",
                user: "{user}",
                chain: id2,
              },
            ]
          : row
      );
    case "addDocument":
      let id3 = uuidv4();
      return state.map((row, i) =>
        i === action.payload
          ? [
              ...row,
              {
                id: id3,
                type: "document",
                name: "New chain",
                query: "{query}",
              },
            ]
          : row
      );
    case "deleteItem":
      const newState = state.map((row) =>
        row.filter((item) => item.id !== action.payload)
      );
      return newState.filter((row) => row.length !== 0);
    case "updateItem":
      return state.map((row) =>
        row.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                name: action.payload.name,
                system: action.payload.system,
                user: action.payload.user,
                chain: action.payload.chain,
              }
            : item
        )
      );
    case "updateDocument":
      return state.map((row) =>
        row.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                name: action.payload.name,
                query: action.payload.query,
              }
            : item
        )
      );
    default:
      return state;
  }
}

export default function Shell() {
  const [state, dispatch] = useReducer(listReducer, []);

  console.log(state);

  return (
    <Tabs variant="pills" orientation="vertical" defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="components">Components</Tabs.Tab>
        <Tabs.Tab value="documents">Documents</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat" pl="xs">
        <Chat state={state} />
      </Tabs.Panel>

      <Tabs.Panel value="components" pl="xs">
        <List state={state} dispatch={dispatch} />
      </Tabs.Panel>

      <Tabs.Panel value="documents" pl="xs">
        <Documents />
      </Tabs.Panel>
    </Tabs>
  );
}
