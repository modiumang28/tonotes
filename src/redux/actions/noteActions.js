export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const addNote = (note) => ({ type: ADD_NOTE, note });
export const deleteNote = (index) => ({ type: DELETE_NOTE, index });
