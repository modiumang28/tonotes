// const redux = require("redux");

// import * as redux from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
import { notificationReducer } from "./reducers/notificationReducer";
// import { combineReducers } from "redux";

// const result = combineReducers({
//   todoReducer,
//   noteReducer,
// });

export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
    notificationReducer,
  },
  middleware: [loggerMiddleware],
});
