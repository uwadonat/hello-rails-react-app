import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { messageReducer } from "./Messages";

const reducer = combineReducers({
  messageReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
