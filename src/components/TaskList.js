import React, {useState} from "react";
import Task from "./Task";


function TaskList({tasks, currentCategory, removeTask}) {

  const filteredTasks = currentCategory === "All" 
    ? tasks 
    : tasks.filter((task) => task.category === currentCategory);
  
  return (
    <div className="tasks">
      {filteredTasks.map((task) => {
        return (
          <Task 
            key={task.text} 
            task={task} 
            removeTask={removeTask} 
            category={currentCategory}
          />
        );
     })};
    </div>
  );
}

export default TaskList;
