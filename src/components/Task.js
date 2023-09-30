import React from "react";

function Task({task, removeTask}) {
  const handleDelete = () => {
    removeTask(task.text);
    
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
