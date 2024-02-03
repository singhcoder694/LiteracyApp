import React from "react";
import NumberSection from "../Components/NumberSection";
import "./SmallestNumber.css";
export default function SmallestNumber() {
  const buttonValues1 = ['a',11,24,234,24];
  const buttonValues2 = ['b',13,56,24,25];

  return (
    <>
        <div
          className="smallest_number_container"
        >
          <NumberSection sectionLabel="Part A" buttonValues={buttonValues1} />
          <NumberSection sectionLabel="Part B" buttonValues={buttonValues2} />
        </div>
    </>
  );
}
