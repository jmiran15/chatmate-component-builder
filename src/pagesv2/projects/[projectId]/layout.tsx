// we have the sidebar if size is large/ otherwise we have the burger menu

import React from "react";
import { useContext, useEffect, useState } from "react";
import {
  IconComponents,
  IconSettings,
  IconApi,
  IconMessages,
} from "@tabler/icons-react";
import { Navbar, Group, ThemeIcon, UnstyledButton, Text } from "@mantine/core";
import { Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import { ProjectContext } from "../../../contextv2/project";
import { supabaseClient } from "../../../utilsv2/supabase";
import { Project as ProjectType } from "../../../componentsv2/ProjectCard";
import { Project as ProjectContextType } from "../../../contextv2/project";

export default function Project() {
  const { projectid } = useParams();
  const { project: globalProject, setProject: setGlobalProject } =
    useContext<ProjectContextType>(ProjectContext);
  const [project, setProject] = useState<ProjectType | null>(null);

  // not necessary since we arent showing the project name (show project name as nav section)
  useEffect(() => {
    // this is the highest point in the app where we know what project we are in
    // for the user use case this would be when they select a project OR based on the multitenanted domain
    setGlobalProject(projectid);

    supabaseClient
      .from("projects")
      .select("*")
      .eq("id", projectid)
      .then(({ data, error }) => {
        if (error) {
          console.log(error);
          return;
        }
        if (data) {
          console.log("fetched project by projectid: ", { project: data });
          setProject(data[0]);
        }
      });
  }, [projectid]);

  return (
    <>
      <Navbar height="100%" p="xs" width={{ sm: 200, lg: 300 }}>
        <Navbar.Section>
          <Text p="xs" size="xl">
            {project?.name}
          </Text>
        </Navbar.Section>
        <Navbar.Section grow mt="xs">
          <MainLinks />
        </Navbar.Section>
      </Navbar>
      <Outlet />
    </>
  );
}

function MainLink({
  icon,
  color,
  label,
  path,
}: {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname.includes(path);

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
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
      onClick={() => navigate(path)}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <IconMessages size="1rem" />,
    color: "blue",
    label: "Chat",
    path: "chat",
  },
  {
    icon: <IconComponents size="1rem" />,
    color: "teal",
    label: "Components",
    path: "components",
  },
  { icon: <IconApi size="1rem" />, color: "violet", label: "API", path: "api" },
  {
    icon: <IconSettings size="1rem" />,
    color: "grape",
    label: "Other settings",
    path: "settings",
  },
];

function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

// this function should be used in settings when chaning the name
// function handleSaveName() {
//   supabaseClient
//     .from("projects")
//     .update({ name: project.name })
//     .eq("id", project.id)
//     .then(({ data, error }) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       setEditing(false);
//     });
// }
