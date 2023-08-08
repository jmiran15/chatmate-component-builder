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
  const { componentid } = useParams();
  const { state } = useGraph();

  return (
    <>
      {state[componentid as UUID].type === CHAT_TYPE ? (
        <Chat component={state[componentid as UUID] as ChatInterface} />
      ) : (
        <Document component={state[componentid as UUID] as DocumentInterface} />
      )}
    </>
  );
}
