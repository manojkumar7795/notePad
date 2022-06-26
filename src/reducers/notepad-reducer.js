// import React, { useEffect, useState } from "react";

import {
  ADD_NOTE,
  DELETE_NOTE,
  SAVE_NOTES,
  TOGGLE_INPUT_TEXT,
  UPDATE_NOTE_CONTENT,
} from "../action-types/notepad-types";
const getLocalData = () => {
  const lists = localStorage.getItem("Reduxnotes");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
const initialState = {
  inputdata: "",
  togglebutton: false,
  isEditItem: "",
  items: getLocalData(),
};

export default function NotePadReducer(state = initialState, action) {
  var { inputdata, togglebutton, isEditItem, items } = state;

  switch (action.type) {
    case TOGGLE_INPUT_TEXT:
      return { ...state, togglebutton: action.data };

    case ADD_NOTE:
      return { ...state, inputdata: action.data };

    case DELETE_NOTE:
      const updatedItems = state.items.filter(
        (curElem) => curElem.id !== action.data
      );
      localStorage.setItem("Reduxnotes", JSON.stringify(updatedItems));
      return { ...state, items: updatedItems };

    case UPDATE_NOTE_CONTENT:
      const item_todo_edited = items.find(
        (curElem) => curElem.id === action.data
      );
      return {
        ...state,
        inputdata: item_todo_edited.name,
        isEditItem: action.data,
        togglebutton: true,
      };

    case SAVE_NOTES:
      console.log("savenotes");
      if (!inputdata) {
        alert("plz fill the data");
      } else if (isEditItem) {
        const edit_content = items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        });
        return {
          items: edit_content,
          inputData: "",
          isEditItem: null,
          toggleButton: false,
        };
      } else {
        const myNewInputData = {
          id: new Date().getTime().toString(),
          name: inputdata,
        };
        console.log("items", myNewInputData);
        return {
          items: [...items, myNewInputData],
          inputData: "",
          toggleButton: false,
        };
      }

    default:
      return state;
  }
}
