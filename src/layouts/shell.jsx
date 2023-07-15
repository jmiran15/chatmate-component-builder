import {
  AppShell,
  Group,
  NativeSelect,
  NumberInput,
  Stack,
  Input,
  Text,
  TextInput,
  Card,
} from "@mantine/core";
import Navigation from "../components/navigation";
import { Fragment } from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { MentionComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  useGraph,
  CREATE_NODE,
  DELETE_NODE,
  ADD_DEPENDENCY,
} from "../context/Graph";

export default function Shell() {
  const { graphState, dispatch, getAvailableDependencies, getDependencyOrder } =
    useGraph();
  const dependencyOrder = getDependencyOrder();

  const createNode = () => {
    dispatch({ type: CREATE_NODE });
  };

  const deleteNode = (id) => dispatch({ type: DELETE_NODE, payload: id });

  const addDependency = (nodeId, dependencyId) =>
    dispatch({ type: ADD_DEPENDENCY, payload: { nodeId, dependencyId } });

  console.log(graphState);

  var data = [
    {
      Name: "Selma Rose",
      Status: "active",
      Eimg: "2",
      EmailId: "selma@gmail.com",
    },
    { Name: "Maria", Status: "active", Eimg: "1", EmailId: "maria@gmail.com" },
    {
      Name: "Russo Kay",
      Status: "busy",
      Eimg: "8",
      EmailId: "russo@gmail.com",
    },
    {
      Name: "Camden Kate",
      Status: "active",
      Eimg: "9",
      EmailId: "camden@gmail.com",
    },
    { Name: "Robert", Status: "busy", Eimg: "dp", EmailId: "robert@gmail.com" },
    { Name: "Garth", Status: "active", Eimg: "7", EmailId: "garth@gmail.com" },
    {
      Name: "Andrew James",
      Status: "away",
      Eimg: "pic04",
      EmailId: "noah@gmail.com",
    },
    { Name: "Olivia", Status: "busy", Eimg: "5", EmailId: "olivia@gmail.com" },
    { Name: "Sophia", Status: "away", Eimg: "6", EmailId: "sophia@gmail.com" },
    {
      Name: "Margaret",
      Status: "active",
      Eimg: "3",
      EmailId: "margaret@gmail.com",
    },
    {
      Name: "Ursula Ann",
      Status: "active",
      Eimg: "dp",
      EmailId: "ursula@gmail.com",
    },
    {
      Name: "Laura Grace",
      Status: "away",
      Eimg: "4",
      EmailId: "laura@gmail.com",
    },
    {
      Name: "Albert",
      Status: "active",
      Eimg: "pic03",
      EmailId: "albert@gmail.com",
    },
    {
      Name: "William",
      Status: "away",
      Eimg: "10",
      EmailId: "william@gmail.com",
    },
  ];
  var fieldsData = { text: "Name" };

  var itemTemplate = function (data) {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <div id="mention-TemplateList">
                <img
                  className="mentionEmpImage"
                  src={"./images/" + data.Eimg + ".png"}
                />
                <span
                  className={
                    "e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom" +
                    data.Status
                  }
                ></span>
              </div>
            </td>
            <td className="mentionNameList">
              <span className="person">{data.Name}</span>
              <span className="email">{data.EmailId}</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  var displayTemplate = function (data) {
    return (
      <Fragment>
        <a title={data.EmailId}>@{data.Name}</a>
      </Fragment>
    );
  };
  var actionBegineHandler = function (args) {
    if (args.requestType === "EnterAction") {
      args.cancel = true;
    }
  };

  return (
    <AppShell
      padding="md"
      navbar={<Navigation />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <pre>{JSON.stringify(dependencyOrder, null, 2)}</pre>
      <Stack>
        {Object.keys(graphState.nodes).map((nodeId) => {
          const node = graphState.nodes[nodeId];
          return (
            <Card key={node.id} shadow="sm" padding="xl" withBorder radius="xl">
              <pre>{JSON.stringify(node, null, 2)}</pre>
              <button onClick={() => deleteNode(node.id)}>Delete Node</button>
              <Stack spacing="0">
                {getAvailableDependencies(node.id).map((dependency) => (
                  <button
                    key={dependency}
                    onClick={() => addDependency(node.id, dependency)}
                  >
                    Add dependency {dependency}
                  </button>
                ))}
              </Stack>
            </Card>
          );
        })}
      </Stack>

      <button onClick={createNode}>Create Node</button>

      {/* Your application here */}
      {/* chat component first */}
      {/* <Stack align="flex-start">
        <TextInput label="Component name" placeholder="New chat component" />

        <NativeSelect
          data={["gpt-4", "gpt-3.5-turbo", "gpt-3.5-turbo-16k"]}
          label="Select the model you would like to use in this chain"
          description="This model will only be used for this chain specifically"
        />
        <Group>
          <NumberInput
            label="Temperature"
            defaultValue={0.7}
            precision={1}
            min={0}
            step={0.1}
            max={2}
          />
          <NumberInput
            label="Max output tokens"
            defaultValue={256}
            precision={0}
            min={1}
            step={1}
            max={2048}
          />
        </Group>
        <NativeSelect
          label="Select the chat history chain"
          data={["Own", "Thought", "Standalone"]}
        />

        <div className="App">
          <Input.Label>System message</Input.Label>

          <div className="control-section" id="rte">
            <div className="rte-control-section">
              <RichTextEditorComponent
                onChange={(e) => console.log(e.currentTarget.value)}
                id="mention_integration"
                placeholder="Type @ and tag the name"
                actionBegin={actionBegineHandler.bind(this)}
              >
                <p>
                  Hello{" "}
                  <span contentEditable={false} className="e-mention-chip">
                    <a title="maria@gmail.com">@Maria</a>
                  </span>
                </p>
                <p>
                  Welcome to the mention integration with rich text editor demo.
                  Type the <code>@</code> character and tag a user from the
                  suggestion list.{" "}
                </p>
                <Inject
                  services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
                />
              </RichTextEditorComponent>
            </div>
          </div>
          <MentionComponent
            id="mentionEditor"
            target="#mention_integration_rte-edit-view"
            suggestionCount={8}
            showMentionChar={false}
            allowSpaces={true}
            dataSource={data}
            fields={fieldsData}
            popupWidth="250px"
            popupHeight="200px"
            itemTemplate={itemTemplate}
            displayTemplate={displayTemplate.bind(this)}
          ></MentionComponent>
        </div>
        <Text>User message</Text>
        <Text>Save</Text>
      </Stack> */}
    </AppShell>
  );
}
