import React from "react";
import { GrAdd } from "react-icons/gr";

const InputTextArea = (props) => {
  console.log("input", props);
  return (
    <div className="textareaContainer  ">
      <textarea
        className="notesTextarea"
        value={props.data.inputdata}
        onChange={(event) => props.addNote(event.target.value)}
        placeholder="Take a notes"
      ></textarea>
      <div className="inputNotesFooter">
        <input
          type="button"
          value="Save"
          onClick={props.saveNotes}
          className="saveButton"
        />
        <button
          className="closeNotes"
          onClick={() => props.toggleButton(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InputTextArea;
