// src/components/TodoForm.jsx
import React, { useState } from 'react';
import './TodoForm.css'; // We'll create this CSS next

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Prevent adding empty tasks
    addTodo(inputValue);
    setInputValue(''); // Clear the input after submission
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What's the plan for today?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;