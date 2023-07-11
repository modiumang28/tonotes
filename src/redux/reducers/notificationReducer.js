import { createSlice } from "@reduxjs/toolkit";
import { todoActions } from "./todoReducer";

const initialState = { message: "" };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  //   extraReducers: {
  //     "todo/add": (state, action) => {
  //       state.message = "Todo is Created!";
  //     },
  //   },

  // Recommended Way to create extraReducer
  //   extraReducers: (builder) => {
  //     builder.addCase(todoActions.add, (state, action) => {
  //       state.message = "Todo is created!";
  //     });
  //   },
  extraReducers: {
    // map objects
    [todoActions.add]: (state, action) => {
      state.message = "Todo is created!";
    },
  },
});

export const notificationReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
