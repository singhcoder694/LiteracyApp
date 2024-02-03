import React, { useState } from "react";
import "./NumberSection.css";
const NumberSection = ({ sectionLabel, buttonValues }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const customFontStyle = {
    fontFamily: "Kranky, serif",
  };

  const handleButtonClick = (index) => {
    // Toggle the clickedIndex
    if (clickedIndex !== index) {
      setClickedIndex(index);
    }
  };

  return (
    <div className="number_section">
      <span className="parts"> {sectionLabel} </span>
      <div className="number_section_parts">
        {buttonValues.map((value, index) => (
          <button
            key={index}
            className={` option_css ${
              clickedIndex === index
                ? "bg-yellow-200 border border-yellow-500 border-2"
                : "bg-smallest-ques-button-clr"
            }`}
            // style={customFontStyle}
            onClick={() => handleButtonClick(index)}
            disabled={clickedIndex === index}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumberSection;
