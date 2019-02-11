import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, Middleware, DeepPartial } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers/memes";
import { getAllMemes } from "./actions";
import App from "./components/App";
import { StoreInterface } from "./types";
import { localStorageField } from "./consts";

const middleware: Middleware[] = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

if (!localStorage.getItem(localStorageField)) {
  localStorage.setItem(localStorageField, "[]");
}

const initialState: StoreInterface = {
  memes: {
    data: [],
    lovedIds: new Set(JSON.parse(localStorage.getItem(localStorageField)))
  }
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

// @ts-ignore
store.dispatch(getAllMemes());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
