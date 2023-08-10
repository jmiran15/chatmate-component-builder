import {
  CHAT_TYPE,
  Chat as ChatInterface,
  DELETE_NODE,
  DOCUMENT_TYPE,
  EDIT_NODE,
  UUID,
} from "../../../../../../reducers/graph-reducer";
import {
  USER_INPUT_UUID,
  getAvailableDependencies,
  htmlToPlaceholder,
  placeholderToHtml,
} from "../../../../../../utilsv2/helpers";
import { useGraph } from "../../../../../../contextv2/graph";
import { supabaseClient } from "../../../../../../utilsv2/supabase";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef, useMemo } from "react";
import {
  Button,
  Group,
  NativeSelect,
  NumberInput,
  Stack,
  TextInput,
  Tooltip,
} from "@mantine/core";
import MentionsEditor from "../../../../../../componentsv2/MentionsEditor";

export default function Chat({ component }: { component: ChatInterface }) {
  const navigate = useNavigate();
  const { state, dispatch } = useGraph();
  // SHOULD PASS THIS IN MAIN PAGE, SINCE USED BY MOST COMPONENTS
  let availableVariables = [
    {
      name: "User input",
      id: USER_INPUT_UUID,
    },
    ...getAvailableDependencies(state, component.id).map((id) => {
      return {
        name: state[id].name,
        id,
      };
    }),
  ];
  const { componentid, projectid } = useParams();
  const [name, setName] = useState<string>(component.name);
  const [model, setModel] = useState<string>(component.model);
  const [temperature, setTemperature] = useState<number>(component.temperature);
  const [maxTokens, setMaxTokens] = useState<number>(component.max_tokens);
  let systemMessage = useMemo(() => {
    return placeholderToHtml(component.system_message, {
      ...state,
      [USER_INPUT_UUID]: {
        name: "User input",
        id: USER_INPUT_UUID,
        number_documents: 0,
        similarity_threshold: 0,
        search_query: "",
        dependencies: [],
        project: USER_INPUT_UUID,
        type: DOCUMENT_TYPE,
      },
    });
  }, [component.system_message, state]);
  let userMessage = useMemo(() => {
    return placeholderToHtml(component.user_message, {
      ...state,
      [USER_INPUT_UUID]: {
        name: "User input",
        id: USER_INPUT_UUID,
        number_documents: 0,
        similarity_threshold: 0,
        search_query: "",
        dependencies: [],
        project: USER_INPUT_UUID,
        type: DOCUMENT_TYPE,
      },
    });
  }, [component.user_message, state]);
  let system = useRef<{ getHtml: () => string } | null>(null);
  let user = useRef<{ getHtml: () => string } | null>(null);

  // when we save, we convert the text with mentions back to our format

  useEffect(() => {
    if (componentid !== component.id) {
      throw new Error("component id mismatch");
    }
  }, [componentid, component.id]);

  console.log({
    component_render: component,
  });

  function handleSave() {
    let component = {
      name,
      model,
      temperature,
      max_tokens: maxTokens,
      system_message: htmlToPlaceholder(system.current!.getHtml()),
      user_message: htmlToPlaceholder(user.current!.getHtml()),
    };

    supabaseClient
      .from("chat_components")
      .update(component)
      .eq("id", componentid)
      .select()
      .then(({ data, error }) => {
        if (error) {
          console.log(error);
          return;
        } else {
          console.log({ data });
        }
      });
    dispatch({
      type: EDIT_NODE,
      payload: {
        id: componentid as UUID,
        type: CHAT_TYPE,
        ...component,
      },
    });
  }

  function handleDelete() {
    supabaseClient
      .from("chat_components")
      .delete()
      .eq("id", componentid)
      .then(({ error }) => {
        if (error) {
          console.log(error);
          return;
        }
      });
    dispatch({
      type: DELETE_NODE,
      payload: componentid as UUID,
    });
    navigate(`/projects/${projectid}/components`);
  }

  return (
    <Stack w="100%">
      <TextInput
        label="Component name"
        placeholder="New chat component"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <NativeSelect
        data={["gpt-4", "gpt-3.5-turbo", "gpt-3.5-turbo-16k"]}
        value={model}
        onChange={(e) => setModel(e.target.value)}
        label="Select the model you would like to use in this chain"
      />
      <NumberInput
        label="Temperature"
        defaultValue={0.7}
        precision={1}
        min={0}
        step={0.1}
        max={2}
        value={temperature}
        onChange={setTemperature as (value: number | "") => void}
      />
      <NumberInput
        label="Max output tokens"
        defaultValue={256}
        precision={0}
        min={1}
        step={1}
        max={2048}
        value={maxTokens}
        onChange={setMaxTokens as (value: number | "") => void}
      />
      <MentionsEditor
        object={system}
        value={systemMessage}
        label={"System message"}
        data={availableVariables}
      />
      <MentionsEditor
        object={user}
        value={userMessage}
        label={"User message"}
        data={availableVariables}
      />

      <Group w="100%" position="apart">
        <Tooltip label="Delete this chain">
          <Button variant="light" color="red" onClick={handleDelete}>
            Delete
          </Button>
        </Tooltip>
        <Tooltip label="Save this chain">
          <Button onClick={handleSave}>Save</Button>
        </Tooltip>
      </Group>
    </Stack>
  );
}
