import {
  Button,
  Group,
  NativeSelect,
  NumberInput,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useState, useRef } from "react";
import MentionsEditor from "../../components/mentionsEditor";

export default function ChatChain({
  updateNode,
  deleteNode,
  addDependency,
  getAvailableDependencies,
  node,
  chatChainIds,
  state,
}) {
  const [name, setName] = useState(node.name);
  const [model, setModel] = useState(node.chatModel);
  const [temperature, setTemperature] = useState(node.temperature);
  const [maxTokens, setMaxTokens] = useState(node.maxTokens);
  const [historyChain, setHistoryChain] = useState(node.history);
  let systemMessage = node.systemMessage;
  let userMessage = node.userMessage;
  let rteSystem = useRef(null);
  let rteUser = useRef(null);

  let availableVariables = [
    {
      name: "user_input",
      id: undefined,
    },
    ...getAvailableDependencies(node.id).map((id) => {
      return {
        name: state.nodes[id].name,
        id,
      };
    }),
  ];
  let availableChains = chatChainIds;

  console.log({ availableVariables, availableChains });

  function getInnerStrings(str) {
    const regex =
      /<span contenteditable="false" class="e-mention-chip">([\s\S]*?)<\/span>/g;
    let match;
    let matches = [];

    while ((match = regex.exec(str)) !== null) {
      matches.push(match[1]);
    }

    return matches;
  }

  function onSave() {
    let systemMessage = rteSystem.current.cloneValue;
    let userMessage = rteUser.current.cloneValue;

    updateNode({
      nodeId: node.id,
      name,
      chatModel: model,
      temperature,
      maxTokens,
      historyChain,
      systemMessage,
      userMessage,
    });

    let systemDependenciesNames = getInnerStrings(systemMessage);
    let userDependenciesNames = getInnerStrings(userMessage);
    console.log({ systemDependenciesNames, userDependenciesNames });

    systemDependenciesNames.forEach((name) => {
      let id = availableVariables.find((variable) => variable.name === name).id;
      console.log("id found: ", { name, id });
      addDependency(node.id, id);
    });
  }
  function onDelete() {
    deleteNode(node.id);
  }

  console.log("STATE: ", state);

  return (
    <Stack align="flex-start">
      <TextInput
        label="Component name"
        placeholder="New chat component"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Group>
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
          onChange={setTemperature}
        />
        <NumberInput
          label="Max output tokens"
          defaultValue={256}
          precision={0}
          min={1}
          step={1}
          max={2048}
          value={maxTokens}
          onChange={setMaxTokens}
        />
      </Group>
      <NativeSelect
        label="Select the chat history chain"
        value={historyChain}
        onChange={(e) => setHistoryChain(e.target.value)}
        data={availableChains.map((node) => {
          return {
            value: node.id,
            label: node.name,
          };
        })}
      />
      <MentionsEditor
        id={"system"}
        nodeId={node.id}
        rteObj={rteSystem}
        value={systemMessage}
        label={"System message"}
        variables={availableVariables}
        state={state}
      />
      <MentionsEditor
        id={"user"}
        nodeId={node.id}
        rteObj={rteUser}
        value={userMessage}
        label={"User message"}
        variables={availableVariables}
        state={state}
      />

      <Group w="100%" position="apart">
        <Tooltip label="Delete this chain">
          <Button variant="light" color="red" onClick={onDelete}>
            Delete
          </Button>
        </Tooltip>
        <Tooltip label="Save this chain">
          <Button onClick={onSave}>Save</Button>
        </Tooltip>
      </Group>
    </Stack>
  );
}
