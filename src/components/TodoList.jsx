// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem'; // Import the single item component
import './TodoList.css'; // We'll create this CSS next

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  if (todos.length === 0) {
    return <p className="no-tasks">🎉 All tasks complete! Add a new one above.</p>;
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id} // Key is essential for React list rendering
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;