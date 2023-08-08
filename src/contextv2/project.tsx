// project context, tells us what project is currently selected (necessary to recreate the chatbot)

import React from "react";
import { createContext, useState } from "react";
import { UUID } from "../reducers/graph-reducer";

export interface Project {
  project: UUID | undefined; // should be UUID type
  setProject: (project: UUID | undefined) => void;
}

export const ProjectContext = createContext<Project>({
  project: undefined,
  setProject: () => {},
});

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [project, setProject] = useState<string | undefined>(undefined);

  return (
    <ProjectContext.Provider
      value={{
        project,
        setProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
