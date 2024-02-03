import React from "react";
import Box from "../Components/Box";
import { useState } from "react";
import { QuestionProvider, useQuestionContext } from "../context/QuestionContext";
export default function FillInTheBlanks() {
  const { updateQuestionStatus } = useQuestionContext();
  const Expressions = [
    [0, "2+3", 5],
    [1, "4+5", 9],
    [2, "6+7", 13],
    [3, "8+9", 17],
  ];
  const [inputValues, setInputValues] = useState([null, null, null, null]);

  const handleInputChange = (index) => (event) => {
    if (!Number.isNaN(event.target.value)) console.log("Not a number");
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    for (let i=0;i<newInputValues.length;i++){
      if (newInputValues[i]===null || newInputValues[i]===""){
        updateQuestionStatus(i+6, false);
      }
      else{
        updateQuestionStatus(i+6, true);
      }
    }
    setInputValues(newInputValues);
  };

  return (
    <>
      <QuestionProvider>
      <div className="smallest_number_container">
        <div className=" flex  justify-around my-4 h-full" style={{marginInline:"5%"}}>
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
            {Expressions.map((expression) => {
              return (
                <Box
                  children={
                    <input
                      className=" w-full h-full rounded-lg bg-transparent font-normal text-lg text-center "
                      style={{ border: "none" }}
                      value={inputValues[expression[0]]}
                      onChange={handleInputChange(expression[0])}
                      placeholder="Enter Your Answer"
                    ></input>
                  }
                />
              );
            })}
          </form>
        </div>
        {/* </div> */}
      </div>
      </QuestionProvider>
    </>
  );
}
