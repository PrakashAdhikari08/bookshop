import {createActions} from "reduxsauce";

export const { Types, Creators } = createActions({
  fetchAllUserReq: null,
  fetchAllUserSuccess: ["payload"],

  changeStatusReq: ["customerId", "status"],
  changeStatusSuccess: ["payload"],
});

export default Creators;
