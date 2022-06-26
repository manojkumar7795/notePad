import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import "./App.css";
import NotePadReducer from "./reducers/notepad-reducer";

const store = createStore(
  NotePadReducer,
  window.devToolsExtension && window.devToolsExtension()
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
