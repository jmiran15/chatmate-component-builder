import {
  Button,
  Flex,
  Grid,
  Stack,
  Text,
  Textarea,
  Badge,
  Checkbox,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React from "react";
import { useEffect, useState } from "react";
import {
  CHAT_TYPE,
  DOCUMENT_TYPE,
  UUID,
  Document as DocumentInterface,
  Chat as ChatInterface,
} from "../../../../../reducers/graph-reducer";
import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { useGraph } from "../../../../../contextv2/graph";
import { supabaseClient } from "../../../../../utilsv2/supabase";
import { flushSync } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { debounce } from "lodash";
import {
  transformData,
  replaceContent,
  USER_INPUT_UUID,
  fetchContexts,
  formatContexts,
} from "../../../../../utilsv2/helpers";

export interface Message {
  id: UUID;
  role: "user" | "assistant";
  content: string;
  reference: UUID;
  component?: UUID;
  chat: UUID;
  request_body?: Object;
}

export default function Chat() {
  const { height } = useViewportSize();
  const { dependencyOrder, state } = useGraph();
  const { chatid } = useParams();
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isVerbose, setIsVerbose] = useState(false);
  const RESPONSE_UUID = dependencyOrder[dependencyOrder.length - 1][0].id;

  useEffect(() => {
    // fetch messages from db
    // setMessages(messages)

    supabaseClient
      .from("messages")
      .select("*")
      .eq("chat", chatid)
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
        } else {
          console.log({ messages: data });
          setMessages(data);
        }
      });
  }, [chatid]);

  // Debounce function to batch update, it will wait until 2 seconds of idle time before running.
  const batchUpdate = debounce(async () => {
    // insert messages to db
    await supabaseClient
      .from("messages")
      .upsert(messages)
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
        } else {
          console.log({ messagesBatch: data });
        }
      });
  }, 2000);

  useEffect(() => {
    if (messages.length === 0) return;
    batchUpdate();
    return () => {
      batchUpdate.cancel();
      batchUpdate.flush();
    };
  }, [messages]);

  console.log({ dependencyOrder });

  let chains = transformData(messages);

  console.log({
    chains,
  });

  async function sendQuery() {
    if (query === "") return;

    let reference = uuidv4(); // reference for current query

    let newMessages: Message[] = [
      ...messages,
      {
        id: uuidv4(),
        role: "user",
        content: query,
        reference,
        component: USER_INPUT_UUID as UUID,
        chat: chatid,
        request_body: undefined,
      } as Message,
    ];

    setMessages(newMessages);

    // function to process each chunk of data

    const processStreamChunk = (chunk: string) => {
      console.log("PROCESSING: ", { chunk });

      const results = chunk.matchAll(/"content":"(.*?)"/g);

      for (let result of results) {
        if (result && result[1] != null) {
          setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages]; // Create a copy
            const currentMessage = {
              ...updatedMessages[updatedMessages.length - 1],
            }; // Copy the current message
            currentMessage.content += result[1]; // Update content
            updatedMessages[updatedMessages.length - 1] = currentMessage; // Replace the message in the array
            return updatedMessages; // Return the updated array
          });
        }
      }
    };

    for (let i = 0; i < dependencyOrder.length; i++) {
      let row: (ChatInterface | DocumentInterface)[] = dependencyOrder[i];
      // eslint-disable-next-line no-loop-func
      const requests = row.map((node) => {
        switch (node.type) {
          case DOCUMENT_TYPE: {
            let searchQuery = replaceContent(
              newMessages.filter((m) => m.reference === reference),
              (node as DocumentInterface).search_query
            );

            console.log({ searchQuery });

            return fetchContexts(
              searchQuery,
              node.id,
              (node as DocumentInterface).number_documents,
              (node as DocumentInterface).similarity_threshold
            ).then((data) => {
              console.log("fetchContexts: ", { data });
              return formatContexts(data);
            });
          }
          // we will also push to supabase the retrieved documents so that we can see it later in the logs
          // then we will push this string output of the function to messages as a new message from this component. (which can then be used by other components)

          case CHAT_TYPE: {
            let system: string = replaceContent(
              newMessages.filter((m) => m.reference === reference),
              (node as ChatInterface).system_message
            );

            let user = replaceContent(
              newMessages.filter((m) => m.reference === reference),
              (node as ChatInterface).user_message
            );

            let history = chains[node.id] || [];

            let req = JSON.stringify({
              model: node.model,
              temperature: node.temperature,
              max_tokens: node.max_tokens,
              stream: node.id === RESPONSE_UUID, // Enable streaming only for the RESPONSE_UUID component,
              messages: [
                {
                  role: "system",
                  content: system,
                },
                ...history.map((message) => ({
                  role: message.role,
                  content: message.content,
                })),
                {
                  role: "user",
                  content: user,
                },
              ],
            });

            if (node.id === RESPONSE_UUID) {
              console.log("THIS IS THE LAST COMPONENT");
              return fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer " + String(process.env.REACT_APP_OPENAI),
                },
                body: req,
              }).then((response) => {
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }

                const reader = response.body.getReader();
                const stream = new ReadableStream({
                  start(controller) {
                    // lets add the message to newMessages
                    newMessages = [
                      ...newMessages,
                      {
                        id: uuidv4(),
                        role: "assistant",
                        content: "",
                        reference,
                        component: node.id as UUID,
                        chat: chatid,
                        request_body: req, // assuming the data returned from the API needs to be stringified to be preserved in the request_body
                      } as Message,
                    ];

                    console.log("inside START: ", { newMessages });

                    function push() {
                      reader.read().then(({ done, value }) => {
                        // If there is no more data to read
                        if (done) {
                          console.log("done", done);
                          controller.close();
                          return;
                        }
                        // Get the data and send it to the browser via the controller
                        controller.enqueue(value);
                        // Check chunks by logging to the console
                        console.log(done, value);

                        // Convert to string
                        const chunkStr = new TextDecoder("utf-8").decode(value);

                        // Process the chunk
                        processStreamChunk(chunkStr);

                        push();
                      });
                    }

                    // Start reading the stream
                    push();
                  },
                });

                return new Response(stream);
              });
            } else {
              return fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer " + String(process.env.REACT_APP_OPENAI),
                },
                body: req,
              })
                .then((res) => res.json())
                .then((data) => {
                  return {
                    data,
                    requestBody: req,
                  };
                });
            }
          }
          default:
            return; // don't return anything for default case
        }
      });

      const results = await Promise.all(requests);

      // eslint-disable-next-line no-loop-func
      dependencyOrder[i].forEach((node, index) => {
        if (node.id === RESPONSE_UUID) {
          return;
        }

        newMessages = [
          ...newMessages,
          {
            id: uuidv4(),
            role: "assistant",
            content:
              node.type === CHAT_TYPE
                ? results.data.choices[0].message.content
                : results[index],
            reference: reference,
            component: dependencyOrder[i][index].id,
            chat: chatid,
            request_body:
              node.type === CHAT_TYPE ? results.requestBody : undefined,
          },
        ];
      });
      flushSync(() => setMessages(newMessages));
    }
    setQuery("");
  }

  return (
    <Stack w="100%" align="center" justify="space-between" h={height - 70 - 16}>
      <Checkbox
        label="verbose"
        checked={isVerbose}
        onChange={(e) => setIsVerbose(e.currentTarget.checked)}
      />
      <Messages
        messages={messages}
        state={state}
        isVerbose={isVerbose}
        RESPONSE_UUID={RESPONSE_UUID}
      />
      <ChatInput query={query} setQuery={setQuery} sendQuery={sendQuery} />
    </Stack>
  );
}

function Messages({ messages, state, isVerbose, RESPONSE_UUID }) {
  if (!isVerbose) {
    messages = messages.filter(
      (message: Message) =>
        message.role === "user" || message.component === RESPONSE_UUID
    );
  }

  return (
    <Stack
      spacing="xs"
      w="100%"
      style={{
        overflow: "auto",
      }}
    >
      {messages.map((message: Message) => (
        <ChatMessage
          key={`${message.reference}${message.component}`}
          message={message}
          state={state}
          isVerbose={isVerbose}
        />
      ))}
    </Stack>
  );
}

function ChatMessage({ message, state, isVerbose }) {
  return (
    <Flex
      direction="column"
      w="100%"
      align="flex-start"
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <Badge>
        {message.role === "user" ? "user" : state[message.component].name}
      </Badge>
      <Text>{message.content}</Text>
      {isVerbose && message.request_body && (
        <JsonView
          data={JSON.parse(message.request_body)}
          shouldInitiallyExpand={() => false}
          style={defaultStyles}
        />
      )}
    </Flex>
  );
}

function ChatInput({ query, setQuery, sendQuery }) {
  return (
    <Grid w="100%" m={0}>
      <Grid.Col span="auto">
        <Textarea
          autosize
          minRows={2}
          maxRows={5}
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
