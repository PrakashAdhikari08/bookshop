import {createActions} from "reduxsauce";

export const { Types, Creators } = createActions({
  fetchAdminLogRequest: null,
  fetchAdminLogSuccess: ["payload"],

  fetchUserLogRequest: null,
  fetchUserLogSuccess: ["payload"],
});

export default Creators;
