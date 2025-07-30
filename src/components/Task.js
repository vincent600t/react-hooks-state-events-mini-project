import React from "react";

function Task({ text, category, onDeleteTask }) {
  function handleDelete() {
    onDeleteTask(text); // Pass the text (or unique id if available) to delete
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
