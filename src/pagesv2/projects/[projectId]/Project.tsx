import React from "react";
import { useContext, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { ProjectContext } from "../../../contextv2/project";
import { Project as ProjectContextType } from "../../../contextv2/project";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Flex, useMantineTheme, Center } from "@mantine/core";

export default function Project() {
  const { projectId } = useParams();
  const { project, setProject: setGlobalProject } =
    useContext<ProjectContextType>(ProjectContext);

  // not necessary since we arent showing the project name (show project name as nav section)
  useEffect(() => {
    // this is the highest point in the app where we know what project we are in
    // for the user use case this would be when they select a project OR based on the multitenanted domain
    setGlobalProject(projectId);
    console.log("set the project");
  }, [projectId, setGlobalProject]);

  const theme = useMantineTheme();

  return (
    <Flex h="100%" w="100%">
      <Sidebar>
        {/* <div>{project}</div> */}
        <Menu>
          <MenuItem component={<NavLink to="chat" />}>Chat</MenuItem>
          <MenuItem component={<NavLink to="components" />}>
            Components
          </MenuItem>
          {/* <MenuItem component={<NavLink to="analytics" />}>Analytics</MenuItem> */}
          {/* <MenuItem component={<NavLink to="versioning" />}>
            Versioning
          </MenuItem> */}
          <MenuItem component={<NavLink to="publish" />}>Publish</MenuItem>
          <MenuItem component={<NavLink to="settings" />}>Settings</MenuItem>
        </Menu>
      </Sidebar>
      <Center p="xl" w="100%">
        <Outlet />
      </Center>
    </Flex>
  );
}
