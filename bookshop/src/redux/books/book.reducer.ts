import {Types} from "./book.action";
import {createReducer} from "reduxsauce";

interface bookProps {
  fetchLoading: boolean;
  loading: boolean;
  modalstate: boolean;
  formReset: boolean;
  books: [];
}

const initialState: bookProps = {
  fetchLoading: false,
  loading: false,
  modalstate: false,
  books: [],
  formReset: false,
};

const modalStateAction = (state: any, action: any) => {
  return { ...state, modalstate: action.payload };
};

const requestFetchState = (state: any, action: any) => {
  return { ...state, fetchLoading: action.payload };
};

const addBooksReqState = (state: any, action: any) => {
  return { ...state, formReset: false, loading: action.payload };
};
const fetchBookSuccess = (state: any, action: any) => {
  return { ...state, books: action.payload };
};

const addBooksSuccess = (state: any, action: any) => {
  return {
    ...state,
    modalstate: false,
    formReset: true,
    books: [action.payload, ...state.books],
  };
};

const removeBooks = (state: any, action: any) => {
  const { id } = action;
  const afterRemove = state.books.filter((item: any) => id !== item.id);
  return {
    ...state,
    books: afterRemove,
  };
};

const reducer = createReducer(initialState, {
  [Types.BOOK_MODAL_STATE]: modalStateAction,
  [Types.FETCH_BOOKS_SUCCESS]: fetchBookSuccess,
  [Types.FETCH_STATE]: requestFetchState,
  [Types.ADD_BOOK_SUCCESS]: addBooksSuccess,
  [Types.ADD_BOOK_STATE]: addBooksReqState,
  [Types.DELETE_BOOK_SUCCESS]: removeBooks,
});

export default reducer;
