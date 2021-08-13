import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import ReactNotification from "react-notifications-component";
import configureStore from "./redux/store";
import history from "./redux/history";
import "animate.css/animate.min.css";
import "./styles/styles.less";
import "src/styles/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ReactNotification />
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
