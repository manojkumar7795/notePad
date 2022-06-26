import { connect } from "react-redux";
import Notepad from "../components/NotePad";

import {
  addNote,
  deleteNote,
  saveNotes,
  toggleInput,
  updateNoteContent,
} from "../actions/notepad-action";
import InputTextArea from "../components/InputTextArea";

const mapStateToProps = (state) => ({ data: state });
const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (data) => {
      dispatch(addNote(data));
    },
    updateNoteContent: (data) => {
      dispatch(updateNoteContent(data));
    },
    deleteNote: (data) => {
      dispatch(deleteNote(data));
    },
    saveNotes: (data) => {
      dispatch(saveNotes(data));
    },
    toggleButton: (data) => {
      dispatch(toggleInput(data));
    },
  };
};
export default {
  notpad: connect(mapStateToProps, mapDispatchToProps)(Notepad),
  inputTextArea: connect(mapStateToProps, mapDispatchToProps)(InputTextArea),
};
