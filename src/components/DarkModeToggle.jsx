// src/components/DarkModeToggle.jsx
import React from 'react';
import './DarkModeToggle.css'; // We'll create this CSS next

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className="toggle-checkbox"
      />
      <label htmlFor="darkModeToggle" className="toggle-label">
        <span className="toggle-icon">
          {isDarkMode ? '🌞' : '🌙'}
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;