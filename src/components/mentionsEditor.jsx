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
import { Input } from "@mantine/core";

export default function MentionsEditor({
  rteObj,
  value,
  label,
  variables,
  id,
  nodeId,
}) {
  console.log({ variables, label });

  var fieldsData = { text: "name" };

  var itemTemplate = function (data) {
    return <p id={data.id}>{data.name}</p>;
  };

  var displayTemplate = function (data) {
    return data.name;
  };

  var actionBegineHandler = function (args) {
    if (args.requestType === "EnterAction") {
      console.log("enter action");
      args.cancel = true;
    }
  };

  return (
    <div>
      <Input.Label>{label}</Input.Label>

      <div className="control-section" id={`rte${id}${nodeId}`}>
        <div className="rte-control-section">
          <RichTextEditorComponent
            id={`mention_integration${id}${nodeId}`}
            placeholder="Type @ and tag the name"
            actionBegin={actionBegineHandler.bind(this)}
            ref={rteObj}
            cloneValue={value}
            value={value}
          >
            <Inject
              services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
            />
          </RichTextEditorComponent>
        </div>
      </div>
      <MentionComponent
        id={`mentionEditor${id}${nodeId}`}
        target={`#mention_integration${id}${nodeId}_rte-edit-view`}
        suggestionCount={8}
        showMentionChar={false}
        allowSpaces={true}
        dataSource={variables}
        fields={fieldsData}
        popupWidth="250px"
        popupHeight="200px"
        itemTemplate={itemTemplate}
        displayTemplate={displayTemplate.bind(this)}
      ></MentionComponent>
    </div>
  );
}
