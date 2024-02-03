import React, { useState } from "react";
import "./NumberSection.css";
import { useQuestionContext } from "../context/QuestionContext";
const NumberSection = ({ sectionLabel, buttonValues }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  // const customFontStyle = {
  //   fontFamily: "Kranky, serif",
  // };
  const arr=buttonValues.slice(1);
  const { updateQuestionStatus } = useQuestionContext();
  const handleButtonClick = (index) => {
    // Toggle the clickedIndex
    if (buttonValues[0] === 'a') {
      setClickedIndex(index);
      updateQuestionStatus(0, true);
    }
    if (buttonValues[0] === 'b') {
      setClickedIndex(index);
      updateQuestionStatus(1, true);
    }
  };
  return (
    <div className="number_section">
      <span className="parts"> {sectionLabel} </span>
      <div className="number_section_parts">
        {arr.map((value, index) => (
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
