import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import messageReducer from "./reducers/messageReducer";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({
  user: userReducer,
  message: messageReducer
});

const store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));

export default store;
