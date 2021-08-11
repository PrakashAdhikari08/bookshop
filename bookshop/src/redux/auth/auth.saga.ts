import notifications from "@Utils/notifications";
import {call, put, takeLatest} from "redux-saga/effects";
import authAction, {Types} from "./auth.action";
import authService from "./auth.service";
import {ResponseGenerator, ResponseGeneratorUpdate} from "./interface";
import loginMosalAction from "./../LoginModal/LoginModal.action";

export function* authLogIn(action: any) {
  const { authData } = action;

  try {
    yield put(authAction.authLoginState(true));
    const response: ResponseGenerator = yield call(
      authService.authLogin,
      authData
    );

    yield put(authAction.authLoginSuccess(response.data));
    yield put(loginMosalAction.modalOpenRequest(false));
  } catch (error) {
    yield put(authAction.errorLogin(error.response.data.message));
  } finally {
    yield put(authAction.authLoginState(false));
  }
}

export function* userRegister(action: any) {
  const { userdata, history } = action;
  try {
    yield put(authAction.authLoginState(true));
    const response: ResponseGenerator = yield call(
      authService.userRegister,
      userdata
    );
    yield put(authAction.registerSuccessReq(history));
    history.push("/login");
  } catch (error) {
    notifications.handleError("Register Error.", error.response);
  } finally {
    yield put(authAction.authLoginState(false));
  }
}

export function* updateUserData(action: any) {
  const { userdata, id } = action;
  try {
    yield put(authAction.authLoginState(true));
    const response: ResponseGeneratorUpdate = yield call(
      authService.updateProfile,
      userdata,
      id
    );

    yield put(authAction.updateProfileSuccess(response.data));
  } catch (error) {
    notifications.handleError("Register Error.", error.response);
  } finally {
    yield put(authAction.authLoginState(false));
  }
}

function* authWatcher() {
  yield takeLatest(Types.AUTH_LOGIN_REQUEST, authLogIn);
  yield takeLatest(Types.REGISTER_REQUEST, userRegister);
  yield takeLatest(Types.UPDATE_PROFILE_REQUEST, updateUserData);
}

export default authWatcher;
