import { Tabs } from "@mantine/core";
import { IconMessage, IconHammer } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
import Chat from "./pages/chat";
import List from "./pages/components";

function listReducer(state, action) {
  switch (action.type) {
    case "addRow":
      let id = uuidv4();
      return [
        ...state,
        [
          {
            id,
            name: "New chain",
            system: "You are a helpful assistant.",
            user: "{query}",
            chain: id,
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
                name: "New chain",
                system: "You are a helpful assistant.",
                user: "{user}",
                chain: id2,
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
    default:
      return state;
  }
}

export default function Shell() {
  const [state, dispatch] = useReducer(listReducer, []);

  return (
    <Tabs variant="pills" orientation="vertical" defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat" icon={<IconMessage size="0.8rem" />}>
          Chat
        </Tabs.Tab>
        <Tabs.Tab value="components" icon={<IconHammer size="0.8rem" />}>
          Components
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat" pl="xs">
        <Chat state={state} />
      </Tabs.Panel>

      <Tabs.Panel value="components" pl="xs">
        <List state={state} dispatch={dispatch} />
      </Tabs.Panel>
    </Tabs>
  );
}
