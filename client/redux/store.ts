import { createStore, applyMiddleware } from "redux";
import loggingMiddleware from "redux-logger";
import gameReducer from "./reducer";

const store = createStore(gameReducer, applyMiddleware(loggingMiddleware));

export default store;
