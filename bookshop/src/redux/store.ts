import {applyMiddleware, compose, createStore} from "redux";
import {routerMiddleware} from "connected-react-router";
import createMiddleware from "redux-saga";
import history from "./history";
import rootReducer from "./rootReducer";
import rootSaga from "./saga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initialState = {};
const sagaMiddleware = createMiddleware();

export default function configureStore() {
  const middleware = [sagaMiddleware, routerMiddleware(history)];
  const ENV = import.meta.env.MODE;
  let composeEnhancer = compose;
  if (ENV !== "production") {
    const composeWithDevToolsExtension =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === "function") {
      composeEnhancer = composeWithDevToolsExtension;
    }
  }
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);

  return { store };
}
