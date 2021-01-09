import React, { useState } from "react";
import Note from "./Note";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const Cnote = () => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });
  const [newitem, setNewItem] = useState([]);
  const listOfItems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, note];
    });
    setnote({
      title: "",
      content: "",
    });
  };
  const del = (id) => {
    setNewItem((prevValue) => {
      return prevValue.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  const itemEvent = (event) => {
    const { name, value } = event.target;
    setnote((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  return (
    <>
      <form>
        <div className="noteinput">
          <input
            className="title"
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={itemEvent}
          />
          <textarea
            className="textarea"
            rows=""
            column=""
            placeholder="Take a note..."
            value={note.content}
            name="content"
            onChange={itemEvent}
          />
          <Button onClick={listOfItems}>
            <AddIcon />
          </Button>
        </div>
        <ol>
          {newitem.map((lval, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={lval.title}
                content={lval.content}
                onSelect={del}
              />
            );
          })}
        </ol>
      </form>
    </>
  );
};
export default Cnote;
