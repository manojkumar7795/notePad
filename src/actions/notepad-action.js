import {
  ADD_NOTE,
  DELETE_NOTE,
  SAVE_NOTES,
  UPDATE_NOTE_CONTENT,
  TOGGLE_INPUT_TEXT,
} from "../action-types/notepad-types";

export const saveNotes = (data) => {
  return {
    type: SAVE_NOTES,
    data,
  };
};

export const addNote = (data) => {
  return {
    type: ADD_NOTE,
    data,
  };
};

export const deleteNote = (data) => {
  return {
    type: DELETE_NOTE,
    data,
  };
};

export const updateNoteContent = (data) => {
  return {
    type: UPDATE_NOTE_CONTENT,
    data,
  };
};
export const toggleInput = (data) => {
  return {
    type: TOGGLE_INPUT_TEXT,
    data,
  };
};
