import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./firebase/data";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
