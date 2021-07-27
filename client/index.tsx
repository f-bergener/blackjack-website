import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
import App from "./App";
import store from "./redux/store";
import { saveState } from "./localStorage";

store.subscribe(() => {
  saveState({
    game: store.getState().game,
    user: store.getState().user,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
