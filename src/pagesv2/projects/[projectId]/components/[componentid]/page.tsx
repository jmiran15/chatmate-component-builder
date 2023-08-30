import {
  CHAT_TYPE,
  Chat as ChatInterface,
  Document as DocumentInterface,
  UUID,
} from "../../../../../reducers/graph-reducer";
import { useGraph } from "../../../../../contextv2/graph";
import Chat from "./componenttypes/chat";
import Document from "./componenttypes/document";
import { useParams } from "react-router-dom";

export default function Component() {
  const { componentId } = useParams();
  const { state } = useGraph();

  return (
    <>
      {state[componentId as UUID].type === CHAT_TYPE ? (
        <Chat component={state[componentId as UUID] as ChatInterface} />
      ) : (
        <Document component={state[componentId as UUID] as DocumentInterface} />
      )}
    </>
  );
}
