import notifications from "src/utils/notifications";
import {call, put, takeLatest} from "redux-saga/effects";
import customerAction, {Types} from "./customer.action";
import customerService from "./customer.service";
import {ResponseGenerator, ResponseGeneratorChangeState} from "./interface";

export function* fetchAllUser(action: any) {
  try {
    const response: ResponseGenerator = yield call(
      customerService.fetchAllUser
    );
    yield put(customerAction.fetchAllUserSuccess(response.data));
  } catch (error) {
    console.log(error.response);
  }
}

export function* updateStatusOfUser(action: any) {
  try {
    const { customerId, status } = action;
    const response: ResponseGeneratorChangeState = yield call(
      customerService.changeStatus,
      customerId,
      status
    );
    yield put(customerAction.changeStatusSuccess(response.data));
  } catch (error) {
    notifications.handleError("Error", error.response);
  }
}

function* customerWatch() {
  yield takeLatest(Types.FETCH_ALL_USER_REQ, fetchAllUser);
  yield takeLatest(Types.CHANGE_STATUS_REQ, updateStatusOfUser);
}

export default customerWatch;
