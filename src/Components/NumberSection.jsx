import React, { useState } from "react";

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
    <div className="flex mt-4 items-center mb-12">
      <span className="font-normal text-xl w-16"> {sectionLabel} </span>
      <div className="flex items-center text-xl justify-around w-10/12 bg-white  p-8 rounded-xl ml-3 ">
        {buttonValues.map((value, index) => (
          <button
            key={index}
            className={`mx-4 w-24 h-12 rounded-md flex items-center justify-center shadow-custom ${
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
