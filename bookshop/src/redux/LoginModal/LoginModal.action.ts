import {createActions} from "reduxsauce";

export const { Types, Creators } = createActions({
  modalOpenRequest: ["payload"],
});

export default Creators;
