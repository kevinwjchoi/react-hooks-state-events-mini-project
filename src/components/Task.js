import React from "react";

function Task({text, category , onRemoveClick }) {

function handleRemoveClick(event){
event.preventDefault();
onRemoveClick(text);
}

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleRemoveClick} className="delete">X</button>
    </div>
  );
}

export default Task;
