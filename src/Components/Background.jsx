import react, { useEffect, useState } from "react";
import "./Background.css";
import "./NavigationButton.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import gudda from "../assets/images/gudda.png";
import React from "react";
import SmallestNumber from "../pages/SmallestNumber";
import Navbar from "./Navbar";
import MatchNumbers from "../pages/MatchNumbers";
import FillInTheBlanks from "../pages/FillInTheBlanks";
import { QuestionProvider } from "../context/QuestionContext";

export default function Background() {
  const [questions, setQuestions]=useState([true,false,false]);
  const [count,setCount]=useState(0);
  const clicked_next = () => {
    setCount(count+1);
    let arr=[false,false,false];
    if (count===2){
      setCount(2);
      setQuestions([false,false,true]);
    }
    else{
      arr[count+1]=true;
      setQuestions(arr);
    }
  }
  const clicked_prev = () => {
    setCount(count-1);
    let arr=[false,false,false];
    if (count===0){
      setCount(0);
      setQuestions([true,false,false]);
    }
    else{
      arr[count-1]=true;
      setQuestions(arr);
    }
  }
  useEffect(()=>{
    if (questions[0]){
      document.getElementById("first_que").style.backgroundColor="#FFC81B"; 
      document.getElementById("second_que").style.backgroundColor="#fff"; 
      document.getElementById("third_que").style.backgroundColor="#fff"; 
    }
  },[questions]);
  if (questions[1]){
    document.getElementById("second_que").style.backgroundColor="#FFC81B";
    document.getElementById("first_que").style.backgroundColor="white";
    document.getElementById("third_que").style.backgroundColor="white";
  }
  if (questions[2]){
    document.getElementById("third_que").style.backgroundColor="#FFC81B";
    document.getElementById("second_que").style.backgroundColor="white";
    document.getElementById("first_que").style.backgroundColor="white";
  }
  const showFirst = () => {
    setCount(0);
    setQuestions([true,false,false]);
  }
  const showSecond = () => {
    setCount(1);
    setQuestions([false,true,false]);
  }
  const showThird = () => {
    setCount(2);
    setQuestions([false,false,true]); 
  }
  
  return (
    <>
      <QuestionProvider>
        <Navbar />
        <div className="background-container">
          <div className="prev-button nav-button-icon" onClick={clicked_prev}>
            <IoIosArrowBack className="back-icon" />
            {count>0?<button >Prev</button>:<button >Back</button>}
          </div>
          
            {questions[0]?<SmallestNumber />:null}
            {questions[1]?<MatchNumbers />:null}
            {questions[2]?<FillInTheBlanks />:null}
        <div className="mascot-contaier">
          <p>
            {questions[0]?"Click on the button having the smallest value.":null}
            {questions[1]?"Click on the boxes on left to select it then click the box on the right to match it with the selected box.":null}
            {questions[2]?"Enter the value on the right side fields after equals (=) sign.":null}
          </p>
          <img src={gudda} alt="Gudda" className="instruction-gudda" />
        </div>
          <div className="next-button nav-button-icon" onClick={clicked_next}>
            <IoIosArrowForward className="back-icon" />
            {count<2?<button >Next</button>:<button >Submit</button>}
          </div>
      </div>
      <div className="navigation_button">
      <div style={{width:"8%"}}></div>
      <div className="options-button-container">
        <button onClick={showFirst} id="first_que">Smallest Number</button>
        <button onClick={showSecond} id="second_que">Match the Column</button>
        <button onClick={showThird} id="third_que">Fill In the Blanks</button>
      </div>
      <div className="submit-button-container">
        <button>Submit</button>
      </div>
      <div style={{width:"8%"}}></div>
    </div>
    </QuestionProvider>
    </>
    
  );
}
