// src/App.jsx (FINAL CODE)

import React, { useState, useEffect } from 'react';
// 1. Component Imports (UNCOMMENTED)
import TodoList from './components/TodoList'; 
import TodoForm from './components/TodoForm';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  // 1. Task State and Persistence Logic (KEPT AS IS)
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [
      { id: 1, text: 'Learn React Hooks (useState)', completed: true },
      { id: 2, text: 'Implement CRUD operations', completed: false },
      { id: 3, text: 'Add stylish dark mode toggle', completed: false },
    ];
  });

  // 2. Theme State and Persistence Logic (KEPT AS IS)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 3. Persist Tasks
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); 

  // 4. Persist Theme and Apply Class
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.body.className = isDarkMode ? 'dark-mode' : ''; 
  }, [isDarkMode]); 

  // --- CRUD Functions (KEPT AS IS) ---
  const addTodo = (text) => {
    if (text.trim() === '') return; 
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // --- JSX RENDER (Placeholders Replaced) ---
  return (
    <div className="todo-app">
      
      {/* 2. Dark Mode Toggle Component */}
      <DarkModeToggle 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <h1>My Stylish Todo List</h1>
      
      {/* 3. Todo Form Component (CREATE) */}
      <TodoForm addTodo={addTodo} />

      {/* 4. Todo List Component (READ, UPDATE, DELETE) */}
      <TodoList 
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
      
    </div>
  );
}

export default App;