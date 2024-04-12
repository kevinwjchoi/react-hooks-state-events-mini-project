import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [formData, setFormData] = useState("");


  function handleDetails(event){
    setDetails(event.target.value);
    
  }

  function handleCategory(event){
    setCategory(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();

    const formData = {
      text: details,
      category: category,
    }
    onTaskFormSubmit(formData);

  }
  
  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
