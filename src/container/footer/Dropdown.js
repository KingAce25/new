import React, { useState } from "react";
import './Dropdown.css'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        English
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <p>Thai</p>
          <p>Myanmar</p>
          <p>Arabic</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
