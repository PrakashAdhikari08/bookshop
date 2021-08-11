import {createActions} from "reduxsauce";

export const { Types, Creators } = createActions({
  fetchMessages: ["userId"],
  fetchMessagesSuccess: ["payload"],

  messageState: ["state"],
  sendMessageReq: ["message"],
  sendMessageSuccess: ["message"],
});

export default Creators;
