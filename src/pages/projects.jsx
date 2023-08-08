import {
  Button,
  Group,
  Stack,
  Text,
  Modal,
  TextInput,
  Card,
} from "@mantine/core";
import { useEffect, useState } from "react";
import ProjectRow from "../components/projectRow";
import { useAuth, UserButton } from "@clerk/clerk-react";
import { useDisclosure } from "@mantine/hooks";
import { createProject, fetchProjects } from "../utils/supabase";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [opened, { open, close }] = useDisclosure(false);
  const [newProject, setNewProject] = useState("");
  const [projects, setProjects] = useState([]);
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const navigate = useNavigate();

  // In case the user signs out while on the page.

  function onCreateProject() {
    console.log("Creating project", { newProject, userId });
    createProject(newProject, userId)
      .then((data) => {
        fetchProjects(userId).then((data) => setProjects(data));
        setNewProject("");
        close();
      })
      .catch((error) => console.log("error"));
  }

  useEffect(() => {
    fetchProjects(userId).then((data) => setProjects(data));
  }, []);

  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <Stack p="xl" mx="200px">
      <Modal opened={opened} onClose={close} title="Create a new project">
        <Stack>
          <TextInput
            label="Project name"
            placeholder="Project name"
            required
            value={newProject}
            onChange={(event) => setNewProject(event.currentTarget.value)}
          />
          <Button onClick={onCreateProject}>Create</Button>
        </Stack>
      </Modal>
      <UserButton />
      <div>
        Hello, {userId} your current active session is {sessionId}
      </div>
      <Group position="apart">
        <Text size="xl">My projects: </Text>
        <Button size="lg" radius="xl" onClick={open}>
          + New project
        </Button>
      </Group>
      {projects.map((project) => (
        <Card
          key={project.id}
          onClick={() => navigate(`/${project.id}`)}
          withBorder
          padding="lg"
          radius="lg"
        >
          <Text size="lg">{project.name}</Text>
        </Card>
      ))}
    </Stack>
  );
}
