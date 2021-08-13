import {all} from "redux-saga/effects";
import authWatcher from "./auth/auth.saga";
import bookWatcher from "./books/book.saga";
import passWatch from "./changePassword/password.saga";
import customerWatch from "./Customer/customer.saga";
import favouriteWatcher from "./favourite/favourite.saga";
import messageWatch from "./messages/message.saga";
import orderBook from "./order/order.saga";
import logWatch from "./userlog/userlog.saga";

function* rootSaga() {
  yield all([
    authWatcher(),
    bookWatcher(),
    orderBook(),
    favouriteWatcher(),
    logWatch(),
    customerWatch(),
    messageWatch(),
    passWatch(),
  ]);
}

export default rootSaga;
