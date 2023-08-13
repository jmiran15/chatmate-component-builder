// we have the sidebar if size is large/ otherwise we have the burger menu

import React from "react";
import { useContext, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ProjectContext } from "../../../contextv2/project";
import { Project as ProjectContextType } from "../../../contextv2/project";

export default function Project() {
  const { projectid } = useParams();
  const { setProject: setGlobalProject } =
    useContext<ProjectContextType>(ProjectContext);

  // not necessary since we arent showing the project name (show project name as nav section)
  useEffect(() => {
    // this is the highest point in the app where we know what project we are in
    // for the user use case this would be when they select a project OR based on the multitenanted domain
    setGlobalProject(projectid);
    console.log("set the project");
  }, [projectid, setGlobalProject]);

  return <Outlet />;
}
