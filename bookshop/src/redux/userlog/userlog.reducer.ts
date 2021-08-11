import {createReducer} from "reduxsauce";
import {Types} from "./userlog.action";

const intitalState = {
  adminLog: [],
  userLog: [],
};

//  fetchAdminLogRequest: null,
//   fetchAdminLogSuccess: ["payload"],

//   fetchUserLogRequest: null,
//   fetchUserLogSuccess: ["payload"],

const adminLogSuccess = (state: any, action: any) => {
  return { ...state, adminLog: action.payload };
};

const userLogSuccess = (state: any, action: any) => {
  return { ...state, userLog: action.payload };
};

const reducerLog = createReducer(intitalState, {
  [Types.FETCH_ADMIN_LOG_SUCCESS]: adminLogSuccess,
  [Types.FETCH_USER_LOG_SUCCESS]: userLogSuccess,
});

export default reducerLog;
