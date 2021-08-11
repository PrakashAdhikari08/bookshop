import {createActions} from "reduxsauce";

export const { Types, Creators } = createActions({
  bookModalState: ["payload"],

  fetchBooksRequest: null,
  fetchBooksSuccess: ["payload"],
  fetchState: ["payload"],

  addBookState: ["payload"],
  addBookRequest: ["payload"],
  addBookSuccess: ["payload"],

  deleteBooksRequest: ["id"],
  deleteBookSuccess: ["id"],
});

export default Creators;
