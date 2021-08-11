import {call, put, takeLatest} from "redux-saga/effects";
import messageAction, {Types} from "./message.action";
import service from "./message.service";
import {ResponseGenerator, ResponseMessage} from "./interface";
import notifications from "@Utils/notifications";

export function* fetchMessage(action: any) {
  try {
    const { userId } = action;
    const response: ResponseGenerator = yield call(
      service.fetchMessage,
      userId
    );
    yield put(messageAction.fetchMessagesSuccess(response.data));
  } catch (error) {
    console.log(error.response);
  }
}

export function* sendMessages(action: any) {
  try {
    const { message } = action;

    yield put(messageAction.messageState(true));
    const response: ResponseMessage = yield call(service.sendMessage, message);
    yield put(messageAction.sendMessageSuccess(response.data));
  } catch (error) {
    notifications.handleError("Error on Messages", error.response);
  } finally {
    yield put(messageAction.messageState(false));
  }
}

function* messageWatch() {
  yield takeLatest(Types.FETCH_MESSAGES, fetchMessage);
  yield takeLatest(Types.SEND_MESSAGE_REQ, sendMessages);
}

export default messageWatch;
