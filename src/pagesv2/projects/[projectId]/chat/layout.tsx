// we have the sidebar if size is large/ otherwise we have the burger menu
import React from "react";
import { Text, Aside, Button, Stack, UnstyledButton } from "@mantine/core";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UUID } from "../../../../reducers/graph-reducer";
import { ProjectContext } from "../../../../contextv2/project";
import { supabaseClient } from "../../../../utilsv2/supabase";
import { useAuth } from "@clerk/clerk-react";
import { v4 as uuidv4 } from "uuid";

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

  console.log({ chats });

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
    <>
      {isChatSelected ? <Outlet /> : <Text>no chat selected</Text>}
      <Aside
        p="md"
        width={{ sm: 200, lg: 300 }}
        style={{
          overflowY: "scroll",
        }}
      >
        <Stack spacing="xs">
          <Button onClick={handleNewChat}>Create a new chat</Button>
          {chats.length > 0 ? (
            chats.map((chat) => <Link key={chat.id} chat={chat} />)
          ) : (
            <p>no chats yet</p>
          )}
        </Stack>
      </Aside>
    </>
  );
}

function Link({ chat }: { chat: Chat }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname.includes(chat.id);

  return (
    <UnstyledButton
      onClick={() => navigate(chat.id)}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
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
      <Text size="sm">{chat.name}</Text>
    </UnstyledButton>
  );
}
