import React from "react";
import NumberSection from "../Components/NumberSection";
import Background from "../Components/Background";

export default function SmallestNumber() {
  const buttonValues1 = [22, 39, 48, 543];
  const buttonValues2 = [12, 56, 45, 1];

  return (
    <>
      <div
        className="container min-h-screen flex flex-col absolute"
        style={{ width: "62%" }}
      >
        <div
          className="bg-smallest-ques-gradient  h-3/6 py-8 pb-0 px-12 z-10 ml-4 flex mt-36 rounded-3xl flex-col"
          style={{ borderRadius: "30px", width: "97%" }}
        >
          <NumberSection sectionLabel="Part A" buttonValues={buttonValues1} />
          <NumberSection sectionLabel="Part B" buttonValues={buttonValues2} />
        </div>
      </div>
    </>
  );
}
