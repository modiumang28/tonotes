import { createSlice } from "@reduxjs/toolkit";
// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const notesInitialState = {
  notes: [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
      createdOn: new Date(),
    },
    {
      text: "Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.",
      createdOn: new Date(),
    },
  ],
};

const noteSlice = createSlice({
  name: "note",
  initialState: notesInitialState,
  reducers: {
    add: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date(),
      });
    },
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;

export const noteSelector = (state) => state.noteReducer.notes;

// export function noteReducer(state = notesInitialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [...state.notes, { text: action.note, createdOn: new Date() }],
//       };
//     case DELETE_NOTE:
//       return {
//         ...state,
//         notes: state.notes.filter((note, i) => i !== action.index),
//       };
//     default:
//       return state;
//   }
// }
