import notifications from "@Utils/notifications";
import {call, put, takeLatest} from "redux-saga/effects";
import favAction, {Types} from "./favourite.action";
import favService from "./favourite.service";
import {ResponseGenerator} from "./interface";

export function* addToFavourite(action: any) {
  try {
    const { userId, bookId } = action;
    yield call(favService.addFavourite, userId, bookId);
    yield put(favAction.addFavouriteSuccess());
    notifications.showSuccess({
      title: "Success",
      message: `Book is Added To Favourite.`,
    });
  } catch (error) {
    notifications.handleError("Error", error.response);
  }
}

export function* fetchFavouriteBooks(action: any) {
  try {
    const { userId } = action;
    const response: ResponseGenerator = yield call(
      favService.fetchFavourite,
      userId
    );
    yield put(favAction.featchFavouritSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* removeFavouriteBooks(action: any) {
  try {
    const { userId, bookId } = action;
    yield call(favService.removeFavourite, userId, bookId);
    yield put(favAction.removeFavouriteSuccess(userId, bookId));
    notifications.showSuccess({
      title: "Success",
      message: `Book with ID ${bookId} is Removed.`,
    });
  } catch (error) {
    notifications.handleError("Error on Remove", error.response);
  }
}

function* favouriteWatcher() {
  yield takeLatest(Types.ADD_FAVOURITE_REQUEST, addToFavourite);
  yield takeLatest(Types.FETCH_FAVOURITE_BOOKS, fetchFavouriteBooks);
  yield takeLatest(Types.REMOVE_FAVOURITE_REQUEST, removeFavouriteBooks);
}

export default favouriteWatcher;
