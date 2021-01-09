import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
    
  return (
    <>
      <div className = "noteinput">
        <h5>{props.title}</h5>
        <br/>
        <p>{props.content}</p>
        <DeleteIcon onClick={() => {
             props.onSelect(props.id);
         }}/>
      </div> 
    </>      
  );
};
export default Note;