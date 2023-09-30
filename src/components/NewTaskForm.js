import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    if (text && category) {
      const newTask = { text, category };
      onTaskFormSubmit(newTask);
      setText("");
      setCategory("");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={text}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.filter(category => category !== "All").map(category => (
                       <option key={category} value={category}>
                         {category}
                       </option>
                     ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
