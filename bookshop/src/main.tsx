import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import configureStore from "./redux/store";
import history from "./redux/history";
import "animate.css/animate.min.css";
import "./styles/styles.less";
import "@Styles/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";
import App from "./App";

const { store } = configureStore();
const render = (Component: any) => {
  ReactDOM.render(
    <Provider store={store}>
      <ReactNotification />
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
};

render(App);
