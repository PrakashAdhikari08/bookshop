import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import history from "./history";
import themeLayout from "./changelayout/changelayout.reducer";
import authReducer from "./auth/auth.reducer";
import modalReducer from "./LoginModal/LoginModal.reducer";
import bookReducer from "./books/book.reducer";
import orderReducer from "./order/order.reducer";
import favouriteBook from "./favourite/favourite.reducer";
import userlog from "./userlog/userlog.reducer";
import customerReducer from "./Customer/customer.reducer";
import messageReducer from "./messages/message.reducer";
import passReducer from "./changePassword/password.reducer";

const rootReducer = combineReducers({
  router: connectRouter(history),
  themeLayout,
  auth: authReducer,
  loginModal: modalReducer,
  bookReducer,
  orderReducer,
  favouriteBook,
  userlog,
  customerReducer,
  messageReducer,
  passReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
