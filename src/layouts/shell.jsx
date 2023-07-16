import { AppShell } from "@mantine/core";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
import {
  useGraph,
  CREATE_NODE,
  DELETE_NODE,
  ADD_DEPENDENCY,
  EDIT_NODE,
} from "../context/Graph";
import ChatChain from "../pages/chains/chatChain";
import DocumentChain from "../pages/chains/documentChain";
import Chat from "../pages/chat";
import { v4 as uuidv4 } from "uuid";

export default function Shell() {
  // each "table" is essentially just a generated id
  // we save in documents with this id as an attribute
  // then we filter the search based on the table id
  const [selectedPage, setSelectedPage] = useState(null);
  const [onChatPage, setOnChatPage] = useState(false);

  useEffect(() => {
    return () => {
      // delete all the users data tables
      console.log("shell unmounted");
      // destroy tables
    };
  }, []);

  const { graphState, dispatch, getAvailableDependencies, getDependencyOrder } =
    useGraph();
  const dependencyOrder = getDependencyOrder();

  let chatChainIds = Object.keys(graphState.nodes)
    .map((key) => graphState.nodes[key])
    .filter((node) => node.type === "chat");

  let tables = Object.keys(graphState.nodes)
    .map((key) => graphState.nodes[key])
    .filter((node) => node.type === "document")
    .map((node) => node.tableId);

  const createNode = (payload) => {
    dispatch({ type: CREATE_NODE, payload });
  };

  const updateNode = (payload) => {
    dispatch({ type: EDIT_NODE, payload });
  };

  const deleteNode = (id) => dispatch({ type: DELETE_NODE, payload: id });

  const addDependency = (nodeId, dependencyId) =>
    dispatch({ type: ADD_DEPENDENCY, payload: { nodeId, dependencyId } });

  function onClickComponent(id) {
    setOnChatPage(false);
    setSelectedPage(id);
  }

  return (
    <AppShell
      padding="md"
      navbar={
        <Navigation
          onClickComponent={onClickComponent}
          state={graphState}
          createNode={createNode}
          onChatPage={onChatPage}
          setOnChatPage={setOnChatPage}
          setSelectedPage={setSelectedPage}
        />
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {Object.keys(graphState.nodes).map((key) => {
        if (graphState.nodes[key].id === selectedPage) {
          return graphState.nodes[key].type === "chat" ? (
            <ChatChain
              updateNode={updateNode}
              deleteNode={deleteNode}
              addDependency={addDependency}
              getAvailableDependencies={getAvailableDependencies}
              node={graphState.nodes[key]}
              chatChainIds={chatChainIds}
              state={graphState}
            />
          ) : (
            <DocumentChain
              node={graphState.nodes[key]}
              updateNode={updateNode}
              deleteNode={deleteNode}
              state={graphState}
              chatChainIds={chatChainIds}
              getAvailableDependencies={getAvailableDependencies}
              addDependency={addDependency}
            />
          );
        } else {
          return <></>;
        }
      })}
      {onChatPage && (
        <Chat
          graphState={graphState}
          dependencyOrder={dependencyOrder}
          chatChains={chatChainIds}
        />
      )}
    </AppShell>
  );
}
