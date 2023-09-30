import React from "react";

function CategoryFilter(
  { categories, onCategoryChange, currentCategory }) {

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button 
          key={category}
          className={currentCategory === category ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}>
            {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
