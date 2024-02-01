import React from "react";
import bgimg from "../assets/bg-ques.svg";
import NumberSection from "../Components/NumberSection";

export default function SmallestNumber() {
  const buttonValues1 = [22, 39, 48, 543];
  const buttonValues2 = [12, 56, 45, 1];

  return (
    <div
      className="container min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-smallest-ques-gradient w-8/12 h-3/6 py-12 px-12 z-10 ml-36 flex mt-16 rounded-3xl flex-col" style={{ borderRadius: '30px' }}>
        <NumberSection sectionLabel="Part A" buttonValues={buttonValues1} />
        <NumberSection sectionLabel="Part B" buttonValues={buttonValues2} />
      </div>
    </div>
  );
}
