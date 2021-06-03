import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "./routes";
import { Provider } from "react-redux";
import { configureAppStore } from "./internals/configureStore";

import "./resources/styles/main.scss";
import ReactMarkdown from "react-markdown";

const store = configureAppStore();

const App = () => (
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
