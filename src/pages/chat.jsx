import { Flex, Grid, TextInput, Text, Button, Badge } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import { fetchSupabase } from "../utils/supabase";

function transformData(messageArray) {
  let userMessages = messageArray.filter((message) => message.role === "user");
  let assistantMessages = messageArray.filter(
    (message) => message.role === "assistant"
  );

  let chains = {};

  for (let assistantMessage of assistantMessages) {
    let chain = (chains[assistantMessage.chain] =
      chains[assistantMessage.chain] || []);
    let relatedUserMessages = userMessages.filter(
      (userMessage) => userMessage.reference === assistantMessage.reference
    );

    for (let userMessage of relatedUserMessages) {
      if (!chain.includes(userMessage)) {
        chain.push(userMessage);
      }
    }
    chain.push(assistantMessage);
  }

  return chains;
}

export default function Chat({ state, graphState, dependencyOrder }) {
  const { height } = useViewportSize();
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [openaikey, setOpenaikey] = useState("");

  let chains = transformData(messages);

  useEffect(() => {
    setMessages([]);
  }, [state]);

  async function sendQuery() {
    if (query === "") return;

    let referenceId = uuidv4();

    let newMessages = [
      ...messages,
      {
        role: "user",
        content: query,
        reference: referenceId,
      },
    ];

    setMessages(newMessages);

    console.log("DEPENDENCY ORDER", { dependencyOrder, graphState });
    for (let i = 0; i < dependencyOrder.length; i++) {
      console.log("RUNNING ROW", i);

      // first lets convert this row to an array of "nodes"
      let row = dependencyOrder[i].map((id) => graphState.nodes[id]); // array of nodes that should be run in parallel
      let res = await Promise.all(
        row.map((node) => {
          switch (node.type) {
            case "document":
              let q = node.searchQuery.replace(
                `<span contenteditable="false" class="e-mention-chip">user_input</span>`,
                query
              );

              Object.keys(graphState.nodes).forEach((id) => {
                q = q.replace(
                  `<span contenteditable="false" class="e-mention-chip">${graphState.nodes[id].name}</span>`,
                  newMessages.find(
                    (message) =>
                      message.reference === referenceId &&
                      message.chain === graphState.nodes[id].id
                  )
                    ? newMessages.find(
                        (message) =>
                          message.reference === referenceId &&
                          message.chain === graphState.nodes[id].id
                      ).content
                    : ""
                );
              });

              return fetchSupabase(q, node.tableId);

            case "chat":
              let systemMessage = node.systemMessage;
              let userMessage = node.userMessage;

              // replace the user input with the actual query
              systemMessage = systemMessage.replace(
                `<span contenteditable="false" class="e-mention-chip">user_input</span>`,
                query
              );
              userMessage = userMessage.replace(
                `<span contenteditable="false" class="e-mention-chip">user_input</span>`,
                query
              );

              console.log({
                CHATCHAINS: Object.keys(graphState.nodes).map(
                  (id) => graphState.nodes[id]
                ),
                NODE: node,
                SYSTEM: systemMessage,
                USER: userMessage,
                NEWMESSAGES: newMessages,
              });

              // loop through all variables and replace them with the actual results from messages
              Object.keys(graphState.nodes).forEach((id) => {
                systemMessage = systemMessage.replace(
                  `<span contenteditable="false" class="e-mention-chip">${graphState.nodes[id].name}</span>`,
                  newMessages.find(
                    (message) =>
                      message.reference === referenceId &&
                      message.chain === graphState.nodes[id].id
                  )
                    ? newMessages.find(
                        (message) =>
                          message.reference === referenceId &&
                          message.chain === graphState.nodes[id].id
                      ).content
                    : ""
                );

                userMessage = userMessage.replace(
                  `<span contenteditable="false" class="e-mention-chip">${graphState.nodes[id].name}</span>`,
                  newMessages.find(
                    (message) =>
                      message.reference === referenceId &&
                      message.chain === graphState.nodes[id].id
                  )
                    ? newMessages.find(
                        (message) =>
                          message.reference === referenceId &&
                          message.chain === graphState.nodes[id].id
                      ).content
                    : ""
                );
              });

              let history = chains[node.history] || [];

              console.log({
                MESSAGES: [
                  {
                    role: "system",
                    content: systemMessage,
                  },
                  ...history.map((message) => ({
                    role: message.role,
                    content: message.content,
                  })),
                  {
                    role: "user",
                    content: userMessage,
                  },
                ],
              });

              return fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + String(openaikey),
                },
                body: JSON.stringify({
                  model: "gpt-4",
                  messages: [
                    {
                      role: "system",
                      content: systemMessage,
                    },
                    ...history.map((message) => ({
                      role: message.role,
                      content: message.content,
                    })),
                    {
                      role: "user",
                      content: userMessage,
                    },
                  ],
                }),
              }).then((res) => res.json());
            default:
              break;
          }
        })
      );

      dependencyOrder[i].forEach((nodeId, index) => {
        newMessages = [
          ...newMessages,
          {
            role: "assistant",
            content:
              graphState.nodes[nodeId].type === "chat"
                ? res[index].choices[0].message.content
                : res[index][0].content,
            reference: referenceId,
            chain: graphState.nodes[nodeId].id,
          },
        ];
      });
      console.log({ newMessages });
      flushSync(() => setMessages(newMessages));
    }

    // let allVariables = state.flat().map((item) => item.id);

    // for (let i = 0; i < state.length; i++) {
    //   let res = await Promise.all(
    //     state[i].map((column) => {
    //       switch (column.type) {
    //         case "document":
    //           let q = column.query;
    //           q = q.replace("{query}", query);

    //           allVariables.forEach((variable) => {
    //             q = q.replace(
    //               variable,
    //               newMessages.find(
    //                 (message) =>
    //                   message.reference === referenceId &&
    //                   message.chain === variable
    //               )
    //                 ? newMessages.find(
    //                     (message) =>
    //                       message.reference === referenceId &&
    //                       message.chain === variable
    //                   ).content
    //                 : ""
    //             );
    //           });

    //           return fetchSupabase(q);
    //         // return await fetchSupabase(
    //         case "chat":
    //           let systemMessage = column.system;
    //           let userMessage = column.user;

    //           userMessage = userMessage.replace("{query}", query);

    //           // loop through all variables and replace them with the actual results from messages
    //           allVariables.forEach((variable) => {
    //             systemMessage = systemMessage.replace(
    //               variable,
    //               newMessages.find(
    //                 (message) =>
    //                   message.reference === referenceId &&
    //                   message.chain === variable
    //               )
    //                 ? newMessages.find(
    //                     (message) =>
    //                       message.reference === referenceId &&
    //                       message.chain === variable
    //                   ).content
    //                 : ""
    //             );

    //             userMessage = userMessage.replace(
    //               variable,
    //               newMessages.find(
    //                 (message) =>
    //                   message.reference === referenceId &&
    //                   message.chain === variable
    //               )
    //                 ? newMessages.find(
    //                     (message) =>
    //                       message.reference === referenceId &&
    //                       message.chain === variable
    //                   ).content
    //                 : ""
    //             );
    //           });

    //           let history = chains[column.chain] || [];

    //           return fetch("https://api.openai.com/v1/chat/completions", {
    //             method: "POST",
    //             headers: {
    //               "Content-Type": "application/json",
    //               Authorization:
    //                 "Bearer " + String(process.env.REACT_APP_OPENAI),
    //             },
    //             body: JSON.stringify({
    //               model: "gpt-4",
    //               messages: [
    //                 {
    //                   role: "system",
    //                   content: systemMessage,
    //                 },
    //                 ...history.map((message) => ({
    //                   role: message.role,
    //                   content: message.content,
    //                 })),
    //                 {
    //                   role: "user",
    //                   content: userMessage,
    //                 },
    //               ],
    //             }),
    //           }).then((res) => res.json());
    //         default:
    //           break;
    //       }
    //     })
    //   );

    //   state[i].forEach((column, index) => {
    //     console.log("column: ", column);
    //     console.log("res: ", res[index][0]);
    //     newMessages = [
    //       ...newMessages,
    //       {
    //         role: "assistant",
    //         content:
    //           column.type === "chat"
    //             ? res[index].choices[0].message.content
    //             : res[index][0].content,
    //         reference: referenceId,
    //         chain: column.type === "chat" ? column.chain : column.id,
    //       },
    //     ];
    //   });
    //   flushSync(() => setMessages(newMessages));
    // }

    setQuery("");
  }
  console.log({ messages });

  return (
    <Flex direction="column" align="center" justify="space-between" h={height}>
      <TextInput
        label="Enter your openai key"
        value={openaiKey}
        onChange={(e) => setOpenaiKey(e.target.value)}
      />
      <ChatHistory messages={messages} graphState={graphState} />
      <ChatInput query={query} setQuery={setQuery} sendQuery={sendQuery} />
    </Flex>
  );
}

function ChatHistory({ messages }) {
  return (
    <Flex
      direction="column"
      gap="sm"
      style={{
        overflow: "auto",
      }}
    >
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message.content} />
      ))}
    </Flex>
  );
}

function ChatMessage({ message, graphState }) {
  return (
    <Flex
      direction="column"
      align="flex-start"
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <Badge>
        {message.role === "user"
          ? "user"
          : graphState.nodes[message.chain].name}
      </Badge>
      <Text>{message}</Text>
    </Flex>
  );
}

function ChatInput({ query, setQuery, sendQuery }) {
  return (
    <Grid w="100%" m={0}>
      <Grid.Col span="auto">
        <TextInput
          placeholder="Type your message"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </Grid.Col>
      <Grid.Col span="content">
        <Button onClick={async () => await sendQuery()}>Send</Button>
      </Grid.Col>
    </Grid>
  );
}
