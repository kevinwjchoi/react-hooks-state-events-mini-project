import React, {useState} from "react";
import Task from "./Task";
import CategoryFilter from "./CategoryFilter";

function TaskList({ handleRemoveClick, tasks, }) {



  return (
    <div className="tasks">
      {tasks.map((task) => ( 
          <Task key={task.text} text={task.text} category={task.category} tasks={tasks} onRemoveClick={handleRemoveClick}/>
        ))}
    </div>
  );
}

export default TaskList;
