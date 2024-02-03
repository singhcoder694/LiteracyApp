import React, { useState } from "react";
import "./NumberSection.css";
import { useQuestionContext } from "../context/QuestionContext";
const NumberSection = ({ sectionLabel, buttonValues1, buttonValues2 }) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [clickedIndex2, setClickedIndex2] = useState(null);

  // const customFontStyle = {
  //   fontFamily: "Kranky, serif",
  // };
  const arr=buttonValues1.slice(1);
  const arr2=buttonValues2.slice(1);
  const { questionStatus, updateQuestionStatus } = useQuestionContext();
  const handleButtonClick = (index) => {
    // Toggle the clickedIndex
    if (buttonValues1[0] === 'a') {
      setClickedIndex(index);
      updateQuestionStatus(1, true, arr[index], arr[0]);
    }
  };
  const handleButtonClick2 = (index) => {
    // Toggle the clickedIndex
    if (buttonValues2[0] === 'b') {
      setClickedIndex2(index);
      updateQuestionStatus(2, true, arr2[index], arr2[3]);
    }
  };
  return (
    <>
    <div className="number_section">
      <span className="parts"> Part A </span>
      <div className="number_section_parts">
        {arr.map((value, index) => (
          <button
            key={index}
            className={` option_css ${
              (questionStatus[1][0]===true && questionStatus[1][1]===arr[index])
                ? "bg-yellow-500 border border-yellow-100 border-2"
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
    <div className="number_section">
    <span className="parts"> Part B </span>
    <div className="number_section_parts">
      {arr2.map((value, index) => (
        <button
          key={index}
          className={` option_css ${
           (questionStatus[2][0]===true && questionStatus[2][1]===arr2[index])
              ? "bg-yellow-500 border border-yellow-100 border-2"
              : "bg-smallest-ques-button-clr"
          }`}
          // style={customFontStyle}
          onClick={() => handleButtonClick2(index)}
          disabled={clickedIndex2 === index}
        >
          {value}
        </button>
      ))}
    </div>
  </div>
  </>
  );
};

export default NumberSection;
