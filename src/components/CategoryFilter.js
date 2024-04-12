import React, {useState} from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {

  const catArray = categories.map((category) => {
    const className = category == selectedCategory ? "selected" : ""; 
    return <button key={category} value={category} className={className} onClick={handleFilterClick}>{category}</button>

  })

  //changes event target value to state selectedCategory
  function handleFilterClick(event){
    setSelectedCategory(event.target.value);
  }

  
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catArray}
     

    </div>
  );
}

export default CategoryFilter;
