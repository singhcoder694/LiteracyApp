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
    <div className="flex my-10 text-lg items-center">
      <span className="font-semibold text-2xl">{sectionLabel} </span>
      <div className="flex items-center text-5xl justify-around w-full">
        {buttonValues.map((value, index) => (
          <button
            key={index}
            className={`mx-4 w-24 h-24 ${
              clickedIndex === index ? "bg-yellow-200" : "bg-rose-300"
            } rounded-full flex items-center justify-center`}
            style={customFontStyle}
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
