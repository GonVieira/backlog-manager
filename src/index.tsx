import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Navigation";
import GlobalStyle from "./GlobalStyle";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Navigation />
    </Provider>
  </React.StrictMode>
);