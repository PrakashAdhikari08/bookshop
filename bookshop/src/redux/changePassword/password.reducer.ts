import {createReducer} from "reduxsauce";
import {Types} from "./password.action";

const initialState = {
  loading: false,
  resetForm: false,
};

const chagneState = (state: any, action: any) => {
  return { ...state, loading: action.state };
};

const changeFormFalse = (state: any, action: any) => {
  return { ...state, resetForm: false };
};

const changePasswordSuccess = (state: any, action: any) => {
  return { ...state, resetForm: true };
};

const passReducer = createReducer(initialState, {
  [Types.CHANGE_PASSWORD_STATE]: chagneState,
  [Types.CHANGE_PASS_SUCCESS]: changePasswordSuccess,
  [Types.RESET_FORM]: changeFormFalse,
});

export default passReducer;
