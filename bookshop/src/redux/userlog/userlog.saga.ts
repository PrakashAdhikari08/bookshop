import {call, put, takeLatest} from "redux-saga/effects";
import logAction, {Types} from "./userlog.action";
import logService from "./userlog.service";
import {ResponseGenerator} from "./interfacr";

export function* fetchAdminlog(action: any) {
  try {
    const response: ResponseGenerator = yield call(logService.fetchAdminlog);
    yield put(logAction.fetchAdminLogSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchUserLog(action: any) {
  try {
    const response: ResponseGenerator = yield call(logService.fetchUserlog);
    yield put(logAction.fetchUserLogSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* logWatch() {
  yield takeLatest(Types.FETCH_ADMIN_LOG_REQUEST, fetchAdminlog);
  yield takeLatest(Types.FETCH_USER_LOG_REQUEST, fetchUserLog);
}

export default logWatch;
