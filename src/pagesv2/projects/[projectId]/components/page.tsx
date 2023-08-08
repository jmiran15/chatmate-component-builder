import React, { useContext, useEffect } from "react";
import { Stack, useMantineTheme, createStyles } from "@mantine/core";
import ComponentCard from "../../../../componentsv2/ComponentCard";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { IconFileText, IconMessage, IconPlus } from "@tabler/icons-react";
import {
  CHAT_TYPE,
  DOCUMENT_TYPE,
  CREATE_NODE,
  UUID,
} from "../../../../reducers/graph-reducer";
import { useGraph } from "../../../../contextv2/graph";
import { supabaseClient } from "../../../../utilsv2/supabase";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ProjectContext } from "../../../../contextv2/project";
import { USER_INPUT_UUID } from "../../../../utilsv2/helpers";

const useStyles = createStyles((theme) => ({
  root: {
    [theme.fn.smallerThan("lg")]: {
      padding: theme.spacing.md,
    },
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  },
}));

export default function Components() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { projectid } = useParams();
  const { project } = useContext(ProjectContext);
  const { dependencyOrder, dispatch } = useGraph();

  useEffect(() => {
    if (project && project !== projectid) {
      throw new Error("project id mismatch");
    }
  }, [project, projectid]);

  function handleAddChatComponent() {
    let id = uuidv4();

    let component = {
      id,
      name: "new chat component",
      model: "gpt-4",
      temperature: 0.7,
      max_tokens: 256,
      system_message: "You are a helpful assitant",
      user_message: `{{${USER_INPUT_UUID}}}`,
      chat_history: id,
      project: project as UUID,
    };

    supabaseClient
      .from("chat_components")
      .insert([component])
      .then(({ data, error }) => {
        dispatch({
          type: CREATE_NODE,
          payload: { ...component, type: CHAT_TYPE, dependencies: [] },
        });
        console.log("error: ", error);
      });
  }

  function handleAddDocumentComponent() {
    let id = uuidv4();

    let component = {
      id,
      name: "new document component",
      number_documents: 10,
      similarity_threshold: 0.7,
      search_query: `{{${USER_INPUT_UUID}}}`,
      project: project as UUID,
    };

    supabaseClient
      .from("document_components")
      .insert([component])
      .then(({ data, error }) => {
        console.log("data: ", data);
        dispatch({
          type: CREATE_NODE,
          payload: { ...component, type: DOCUMENT_TYPE, dependencies: [] },
        });
        console.log("error: ", error);
      });
  }

  return (
    <>
      <Stack w="100%" className={classes.root}>
        {dependencyOrder.flat().map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </Stack>
      <Fab
        icon={<IconPlus />}
        mainButtonStyles={{
          backgroundColor: theme.colors.blue[6],
        }}
        event="click"
        alwaysShowTitle={true}
      >
        <Action
          text="Add a chat component"
          onClick={handleAddChatComponent}
          style={{
            backgroundColor: theme.colors.blue[6],
          }}
        >
          <IconMessage />
        </Action>
        <Action
          text="Add a document retrieval component"
          onClick={handleAddDocumentComponent}
          style={{
            backgroundColor: theme.colors.blue[6],
          }}
        >
          <IconFileText />
        </Action>
      </Fab>
    </>
  );
}
