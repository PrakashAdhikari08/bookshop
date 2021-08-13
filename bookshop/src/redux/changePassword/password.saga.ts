import {call, put, takeLatest} from "redux-saga/effects";
import service from "./password.service";
import passAction, {Types} from "./password.action";
import notifications from "@Utils/notifications";

export function* changePasswordFunction(action: any) {
  try {
    const { passData } = action;
    yield put(passAction.changePasswordState(true));
    yield put(passAction.resetForm());
    yield call(service.changePassword, passData);
    yield put(passAction.changePassSuccess());
    notifications.showSuccess({
      title: "Success",
      message: "Passowrd Changed.",
    });
  } catch (error) {
    notifications.handleError("Error Occour.", error.response);
  } finally {
    yield put(passAction.changePasswordState(false));
  }
}

function* passwordWatch() {
  yield takeLatest(Types.CHANGE_PASS_REQUEST, changePasswordFunction);
}

export default passwordWatch;
