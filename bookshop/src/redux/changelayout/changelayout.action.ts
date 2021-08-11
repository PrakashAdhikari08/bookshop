import {createActions} from "reduxsauce";

export const { Types, Creators } = createActions({
  changeLayoutTheme: ["payload"],
  setCollapsSidebar: ["payload"],
  getLayoutTheme: null,
});

export default Creators;
