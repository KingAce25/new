// Dropdown.js
import React from 'react';

const Dropdown = ({ id, options, selectedValue, onChange }) => (
  <div className="dropdown-container">
    <label htmlFor={`dropdown-${id}`}> {id}:</label>
    <select
      id={`dropdown-${id}`}
      value={selectedValue}
      onChange={(e) => onChange(id, e.target.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
