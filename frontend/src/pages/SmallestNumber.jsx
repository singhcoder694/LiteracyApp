import React from "react";
import NumberSection from "../Components/NumberSection";
import "./SmallestNumber.css";
export default function SmallestNumber() {
  const buttonValues1 = ['a',11,24,234,20];
  const buttonValues2 = ['b',13,56,24,25];

  return (
    <>
        <div
          className="smallest_number_container"
        >
          <NumberSection sectionLabel="Part A" buttonValues1={buttonValues1}  buttonValues2={buttonValues2}/>
        </div>
    </>
  );
}
