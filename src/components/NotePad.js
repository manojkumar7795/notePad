import React, { useEffect } from "react";
import { GrAdd } from "react-icons/gr";
import { RiDeleteBin2Line } from "react-icons/ri";
import NotePadContainer from "../containers/NotePadContainer";
const NotePade = (props) => {
  console.log("notepad", props);

  const itemsRevers = [...props.data.items].reverse();

  useEffect(() => {
    localStorage.setItem("Reduxnotes", JSON.stringify(itemsRevers));
  }, [itemsRevers]);
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Notes</h1>
          <button className="addNotes" onClick={() => props.toggleButton(true)}>
            <GrAdd />
          </button>
        </div>
        {props.data.items.map((curEle) => {
          return (
            <div className="notes" key={curEle.id}>
              <span
                onClick={() => props.updateNoteContent(curEle.id)}
                className="notesDis"
              >
                {curEle.name.substring(0, 25)}...
              </span>
              <RiDeleteBin2Line
                onClick={() => props.deleteNote(curEle.id)}
                className="deleteButton"
              />
            </div>
          );
        })}
      </div>

      {props.data.togglebutton ? <NotePadContainer.inputTextArea /> : null}
    </>
  );
};

export default NotePade;
