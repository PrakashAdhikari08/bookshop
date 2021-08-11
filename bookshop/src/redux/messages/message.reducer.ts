import {createReducer} from "reduxsauce";
import {Types} from "./message.action";

const initialState = {
  loading: false,
  messages: [],
  clearField: false,
};

const messageStateChange = (state: any, action: any) => {
  return { ...state, clearField: false, lading: action.state };
};

const fetchMessages = (state: any, action: any) => {
  return { ...state, messages: action.payload };
};

const sendMessages = (state: any, action: any) => {
  return { ...state, messages: [...state.messages, action.message] };
};

const messageReducer = createReducer(initialState, {
  [Types.MESSAGE_STATE]: messageStateChange,
  [Types.FETCH_MESSAGES_SUCCESS]: fetchMessages,
  [Types.SEND_MESSAGE_SUCCESS]: sendMessages,
});

export default messageReducer;
