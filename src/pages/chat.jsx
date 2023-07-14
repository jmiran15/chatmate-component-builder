import { Flex, Grid, TextInput, Text, Button } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { v4 as uuidv4 } from "uuid";

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

export default function Chat({ state }) {
  const { height } = useViewportSize();
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  let chains = transformData(messages);

  useEffect(() => {
    setMessages([]);
  }, [state]);

  function sendQuery() {
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

    let allVariables = state.flat().map((item) => item.id);

    state.map((row) =>
      Promise.all(
        row.map((column) => {
          let systemMessage = column.system;
          let userMessage = column.user;

          userMessage = userMessage.replace("{query}", query);

          // loop through all variables and replace them with the actual results from messages
          allVariables.forEach((variable) => {
            systemMessage = systemMessage.replace(
              variable,
              newMessages.find(
                (message) =>
                  message.reference === referenceId && message.id === variable
              )
                ? newMessages.find(
                    (message) =>
                      message.reference === referenceId &&
                      message.id === variable
                  ).content
                : ""
            );

            userMessage = userMessage.replace(
              variable,
              newMessages.find(
                (message) =>
                  message.reference === referenceId && message.id === variable
              )
                ? newMessages.find(
                    (message) =>
                      message.reference === referenceId &&
                      message.id === variable
                  ).content
                : ""
            );
          });

          let history = chains[column.chain] || [];

          console.log({
            column,
            systemMessage,
            userMessage,
            chain: history,
          });

          return fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(process.env.REACT_APP_OPENAI),
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
              max_tokens: 150,
            }),
          }).then((res) => res.json());
        })
      ).then((res) => {
        // res is an array of completions
        // push these to newMessages
        row.forEach((column, index) => {
          newMessages = [
            ...newMessages,
            {
              role: "assistant",
              content: res[index].choices[0].message.content,
              reference: referenceId,
              chain: column.chain,
            },
          ];
        });
        console.log("new messages from inside: ", newMessages);
        flushSync(() => setMessages(newMessages));
      })
    );

    console.log("new messages: ", newMessages);

    // setMessages(newMessages);
    setQuery("");
  }
  return (
    <Flex direction="column" align="center" justify="space-between" h={height}>
      <ChatHistory messages={messages} />
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

function ChatMessage({ message }) {
  return (
    <Flex
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
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
        <Button onClick={sendQuery}>Send</Button>
      </Grid.Col>
    </Grid>
  );
}
