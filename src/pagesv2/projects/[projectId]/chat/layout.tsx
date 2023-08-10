// we have the sidebar if size is large/ otherwise we have the burger menu
import React from "react";
import {
  Text,
  Aside,
  Button,
  Stack,
  UnstyledButton,
  Group,
  ActionIcon,
  Card,
  Center,
  TextInput,
  MediaQuery,
  Flex,
} from "@mantine/core";
import { Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UUID } from "../../../../reducers/graph-reducer";
import { ProjectContext } from "../../../../contextv2/project";
import { supabaseClient } from "../../../../utilsv2/supabase";
import { useAuth } from "@clerk/clerk-react";
import { v4 as uuidv4 } from "uuid";
import { IconCheck, IconPencil, IconTrash, IconX } from "@tabler/icons-react";

export interface Chat {
  id: UUID;
  created_at: string;
  name: string;
  user: string;
  project: UUID;
}

export default function ChatLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isChatSelected = location.pathname.split("/").pop() !== "chat";
  const [chats, setChats] = useState<Chat[]>([]);
  const { project } = useContext(ProjectContext);
  const { userId } = useAuth();
  const { projectid } = useParams();

  useEffect(() => {
    // fetch the users chats
    supabaseClient
      .from("chats")
      .select("*")
      .eq("user", userId)
      .eq("project", project)
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
        } else {
          setChats(data);
        }
      });
  }, [userId, project]);

  function handleNewChat() {
    // create a new chat, set name to untitled chat, user to userId

    let newChat = {
      id: uuidv4(),
      name: "Untitled chat",
      user: userId,
      project: project,
    };
    supabaseClient
      .from("chats")
      .insert([newChat])
      .select("*")
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
        } else {
          setChats((prev) => [...prev, data[0]]);
          navigate(data[0].id);
        }
      });
  }

  return (
    <Flex direction="row" w="100%" align="flex-start">
      {isChatSelected ? (
        <Outlet />
      ) : (
        <Card
          withBorder
          radius="lg"
          padding="lg"
          style={{
            width: "100%",
            height: "80vh",
          }}
        >
          <Center w="100%" h="100%">
            <Stack>
              <Text>Create a new chat or select a chat</Text>
              <Button onClick={handleNewChat}>Create a new chat</Button>
            </Stack>
          </Center>
        </Card>
      )}
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <Stack
          px="md"
          w="300px"
          spacing="xs"
          style={{
            overflowY: "scroll",
          }}
        >
          <Button onClick={handleNewChat}>Create a new chat</Button>
          {chats.length > 0 ? (
            chats.map((chat) => (
              <Link
                key={chat.id}
                chat={chat}
                setChats={setChats}
                projectid={projectid}
              />
            ))
          ) : (
            <p>no chats yet</p>
          )}
        </Stack>
      </MediaQuery>
    </Flex>
  );
}

function Link({
  chat,
  setChats,
  projectid,
}: {
  chat: Chat;
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
  projectid: UUID;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname.includes(chat.id);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(chat.name);

  function updateName() {
    supabaseClient
      .from("chats")
      .update({ name })
      .eq("id", chat.id)
      .select("*")
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
        } else {
          setChats((prev) =>
            prev.map((chat) => {
              if (chat.id === data[0].id) {
                return data[0];
              } else {
                return chat;
              }
            })
          );
          setIsEditing(false);
        }
      });
  }

  function handleDeleteChat() {
    supabaseClient
      .from("chats")
      .delete()
      .eq("id", chat.id)
      .then(({ error }) => {
        if (error) {
          console.error(error);
        } else {
          setChats((prev) => prev.filter((p) => p.id !== chat.id));
          navigate(`/projects/${projectid}/chat`);
        }
      });
  }

  return (
    <UnstyledButton
      onClick={() => navigate(chat.id)}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.sm,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
        backgroundColor: isActive
          ? theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0]
          : "transparent",
      })}
    >
      <Group position="apart">
        {!isEditing ? (
          <Text size="sm">{name}</Text>
        ) : (
          <TextInput
            size="sm"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        )}
        {isActive && (
          <Group spacing="0">
            <ActionIcon
              variant="transparent"
              sx={(theme) => ({
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[2]
                    : theme.colors.gray[5],

                "&:hover": {
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[7],
                },
              })}
              onClick={!isEditing ? () => setIsEditing(true) : updateName}
            >
              {!isEditing ? (
                <IconPencil size="1.125rem" />
              ) : (
                <IconCheck size="1.125rem" />
              )}
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              onClick={
                !isEditing ? handleDeleteChat : () => setIsEditing(false)
              }
              sx={(theme) => ({
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[2]
                    : theme.colors.gray[5],

                "&:hover": {
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[7],
                },
              })}
            >
              {!isEditing ? (
                <IconTrash size="1.125rem" />
              ) : (
                <IconX size="1.125rem" />
              )}
            </ActionIcon>
          </Group>
        )}
      </Group>
    </UnstyledButton>
  );
}
