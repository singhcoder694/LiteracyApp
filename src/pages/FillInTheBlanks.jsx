import React, { useEffect } from "react";
import Box from "../Components/Box";
import { useState } from "react";
import {
  QuestionProvider,
  useQuestionContext,
} from "../context/QuestionContext";
import AOS from "aos";
import "aos/dist/aos.css";
export default function FillInTheBlanks() {
  const { questionStatus, updateQuestionStatus } = useQuestionContext();
  const Expressions = [
    [0, "2+3", 5],
    [1, "4+5", 9],
    [2, "6+7", 13],
    [3, "8+9", 17],
  ];
  const [inputValues, setInputValues] = useState([null, null, null, null]);
  useEffect(()=>{
    AOS.init({
        duration:500
    });
},[]);
  const handleInputChange = (index) => (event) => {
    if (isNaN(event.target.value)) {
      return;
    };
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    updateQuestionStatus(index + 7, true, newInputValues[index], "answer");
    setInputValues(newInputValues);
  };

  return (
    <>
      <QuestionProvider>
        <div className="smallest_number_container" data-aos="zoom-in">
          <div
            className=" flex  justify-around my-4 h-full"
            style={{ marginInline: "5%" }}
          >
            <div className="flex flex-col justify-around">
              {Expressions.map((expression) => {
                return (
                  <Box
                    children={
                      <div className=" font-custom font-semibold text-lg">
                        {expression}
                      </div>
                    }
                  />
                );
              })}
            </div>
            <div className="flex flex-col justify-around w-7">
              {Expressions.map(() => {
                return <div className=" text-2xl font-medium">=</div>;
              })}
            </div>
            <form className="flex flex-col justify-around ">
              {Expressions.map((expression, index) => {
                return (
                  <Box
                    children={
                      <input
                        className=" w-full h-full rounded-lg bg-transparent font-normal text-lg text-center "
                        style={{ border: "none" }}
                        value={questionStatus[index + 7][1]}
                        onChange={handleInputChange(expression[0])}
                        placeholder="Enter Your Answer"
                      ></input>
                    }
                  />
                );
              })}
            </form>
          </div>
        </div>
      </QuestionProvider>
    </>
  );
}
