import {createActions} from "reduxsauce";

export const { Types, Creators } = createActions({
  changePasswordState: ["state"],

  changePassRequest: ["passData"],
  changePassSuccess: null,
  resetForm: null,
});

export default Creators;
