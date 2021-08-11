import {createReducer} from "reduxsauce";
import {Types} from "./auth.action";
import notifications from "@Utils/notifications";

interface userState {
  loading: boolean;
  userData: {};
  userLogin: boolean;
  errorMessage?: string;
  fetchadminload?: boolean;
}

const login =
  localStorage.getItem("userdata") && localStorage.getItem("accessToken")
    ? true
    : false;

const initialState: userState = {
  loading: false,
  // @ts-ignore
  userData: JSON.parse(localStorage.getItem("userdata")),
  userLogin: login,
  errorMessage: "",
  fetchadminload: false,
};

const authLogInState = (state: userState, action: any) => {
  return { ...state, loading: action.loading };
};

const authLoginSuccess = (state: userState, action: any) => {
  localStorage.setItem(
    "userdata",
    JSON.stringify(action.userData.responseUser)
  );
  // Cookies.set("userdata", JSON.stringify(action.userData.responseUser), {
  //   path: "/",
  //   secure: true,
  //   httpOnly: true,
  // });
  localStorage.setItem("accessToken", action.userData.token);
  // Cookies.set("accessToken", action.userData.token, {
  //   path: "/",
  //   secure: true,
  //   httpOnly: true,
  // });
  return {
    ...state,
    loading: false,
    errorMessage: "",
    userData: action.userData.responseUser,
    userLogin: true,
  };
};

const fetchAdminLoader = (state: userState, action: any) => {
  return { ...state, fetchadminload: action.loading };
};

const errorMessageSet = (state: userState, action: any) => {
  return { ...state, errorMessage: action.message };
};

const logoutUsers = (state: userState, action: any) => {
  localStorage.clear();

  return { ...state, userLogin: false, userData: null };
};

const registerSuccess = (state: userState, action: any) => {
  notifications.showSuccess({
    title: "Success",
    message: "User Successfully Created.",
  });

  return { ...state };
};

const updateProfileSuccess = (state: userState, action: any) => {
  notifications.showSuccess({
    title: "Success",
    message: "User Detail Updated.",
  });
  localStorage.setItem("userdata", JSON.stringify(action.payload));
  console.log("UPDATES>>>>>", action.payload);
  return { ...state, userData: action.payload };
};

// @ts-ignore
const authReducer = createReducer(initialState, {
  [Types.AUTH_LOGIN_STATE]: authLogInState,
  [Types.AUTH_LOGIN_SUCCESS]: authLoginSuccess,
  [Types.ERROR_LOGIN]: errorMessageSet,
  [Types.LOG_OUT_USER]: logoutUsers,
  [Types.FETCH_ADMIN_LOADER]: fetchAdminLoader,
  [Types.REGISTER_SUCCESS_REQ]: registerSuccess,
  [Types.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
});

export default authReducer;
