import {createActions} from "reduxsauce";

export const { Types, Creators } = createActions({
  authLoginRequest: ["authData"],
  authLoginState: ["loading"],
  authLoginSuccess: ["userData"],
  errorLogin: ["message"],
  fetchAdminLoader: ["loading"],
  logOutUser: null,

  registerRequest: ["userdata", "history"],
  registerSuccessReq: ["history"],

  updateProfileRequest: ["userdata", "id"],
  updateProfileSuccess: ["payload"],
});

export default Creators;
