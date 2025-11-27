// src/components/TodoItem.jsx
import React, { useState } from 'react';
import './TodoItem.css'; // We'll create this CSS next

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  // State to manage if the task is currently being edited
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText.trim()); // Call the main edit function
      setIsEditing(false); // Exit editing mode
    }
  };

  const handleCancel = () => {
    setEditText(todo.text); // Reset the text to the original task text
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        // Editing Mode UI
        <div className="edit-container">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="edit-input"
            autoFocus
          />
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        // Read/View Mode UI
        <>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="task-checkbox"
            />
            <span className="checkmark"></span>
          </label>

          <span className="todo-text" onClick={() => toggleComplete(todo.id)}>
            {todo.text}
          </span>

          <div className="actions">
            <button className="edit-btn" onClick={handleEdit} title="Edit Task">
              ✏️
            </button>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)} title="Delete Task">
              🗑️
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;