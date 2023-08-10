import React from "react";
import { useEffect, useState } from "react";
import { ProjectCard, Project } from "../../componentsv2/ProjectCard";
import { Stack, useMantineTheme, createStyles } from "@mantine/core";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { IconPlus } from "@tabler/icons-react";
import { supabaseClient } from "../../utilsv2/supabase";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "@clerk/clerk-react";

const useStyles = createStyles((theme) => ({
  root: {
    [theme.fn.smallerThan("lg")]: {
      padding: theme.spacing.md,
    },
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  },
}));

export default function Projects() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [projects, setProjects] = useState<Project[]>([]);
  const { userId } = useAuth();

  // fetch projects from the database
  useEffect(() => {
    supabaseClient
      .from("projects")
      .select("*")
      .eq("user", userId)
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) {
          console.log({ error });
          return;
        }
        if (data) {
          setProjects(data);
        }
      });
  }, [userId]);

  function handleNewProject() {
    supabaseClient
      .from("projects")
      .insert([{ id: uuidv4(), name: "New project", user: userId }])
      .select()
      .then(({ data, error }) => {
        if (error) {
          console.log(error);
          return;
        }
        if (data) {
          setProjects((projects) => [...projects, ...data]);
        }
      });
  }

  return (
    <>
      <Stack w="100%" className={classes.root}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Stack>
      <Fab
        icon={<IconPlus />}
        mainButtonStyles={{
          backgroundColor: theme.colors.blue[6],
        }}
        event={"click"}
        alwaysShowTitle={true}
        onClick={handleNewProject}
      />
    </>
  );
}
