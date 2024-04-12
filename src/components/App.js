import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");


function App() {
  const [tasks , setTasks] = useState(TASKS);
  const [categories, setCategories] =useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");


  function handleRemoveClick(text){
    const updatedTaskList = tasks.filter((task) => {
      if(task.text !== text) {
        return task; 
      }
    })
    setTasks(updatedTaskList);
  }

  function onTaskFormSubmit(formData){
    const newTaskList = [...tasks, formData];
    setTasks(newTaskList);
  };


    const filteredTaskList = tasks.filter((task) => {
      if (selectedCategory == "All") return true; 
      return task.category == selectedCategory
    })

  



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTaskList} setTasks={setTasks} handleRemoveClick={handleRemoveClick}/>
    </div>
  );
}

export default App;
