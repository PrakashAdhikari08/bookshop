import notifications from "@Utils/notifications";
import {call, put, takeLatest} from "redux-saga/effects";
import bookAction, {Types} from "./book.action";
import bookService from "./book.service";
import {DelectResponseGenetater, ResponseGenerator} from "./interfaces";

export function* fetchBooks(action: any) {
  try {
    yield put(bookAction.fetchState(true));
    const response: ResponseGenerator = yield call(bookService.fetchBook);
    yield put(bookAction.fetchBooksSuccess(response.data));
  } catch (error) {
    notifications.handleError("Fetch Error", error.response);
  } finally {
    yield put(bookAction.fetchState(false));
  }
}

export function* addBooks(action: any) {
  const { payload } = action;
  try {
    yield put(bookAction.addBookState(true));
    const response: ResponseGenerator = yield call(
      bookService.addBook,
      payload
    );
    yield put(bookAction.addBookSuccess(response.data));
    notifications.showSuccess({
      title: "Success",
      message: "Book Added Successfully.",
    });
  } catch (error) {
    notifications.handleError("Error", error.response);
  } finally {
    yield put(bookAction.addBookState(false));
  }
}

export function* deleteBook(action: any) {
  const { id } = action;
  try {
    const response: DelectResponseGenetater = yield call(
      bookService.deleteBook,
      id
    );

    yield put(bookAction.deleteBookSuccess(id));
    notifications.showSuccess({ title: "Success", message: "Book Deleted" });
  } catch (error) {
    notifications.handleError("Error On Delete", error.response);
  } finally {
  }
}

function* bookWatcher() {
  yield takeLatest(Types.FETCH_BOOKS_REQUEST, fetchBooks);
  yield takeLatest(Types.ADD_BOOK_REQUEST, addBooks),
    yield takeLatest(Types.DELETE_BOOKS_REQUEST, deleteBook);
}

export default bookWatcher;
