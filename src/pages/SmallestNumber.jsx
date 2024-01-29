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
      <div className="bg-white w-7/12 h-5/6 p-12 z-10 ml-36 flex mt-16 rounded-md shadow-custom flex-col">
        <h3 className="text-xl font-mono mb-7">
          Select the <span className="font-bold">Smallest</span> Number:
        </h3>
        <NumberSection sectionLabel="1)" buttonValues={buttonValues1} />
        <NumberSection sectionLabel="2)" buttonValues={buttonValues2} />
      </div>
    </div>
  );
}
