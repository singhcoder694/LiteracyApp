import React from "react";
import "./NavigationButton.css";
function NavigationButton() {
  return (
    <div className="navigation_button">
      <div style={{width:"8%"}}></div>
      <div className="options-button-container">
        <button>Fill in the blanks</button>
        <button>Fill in the blanks</button>
        <button>Fill in the blanks</button>
      </div>
      <div className="submit-button-container">
        <button>Fill in the blanks</button>
      </div>
      <div style={{width:"8%"}}></div>
    </div>
  );
}

export default NavigationButton;
