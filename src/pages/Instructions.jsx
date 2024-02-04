import React from "react";
import "./Instructions.css";
import gudda from "../assets/images/gudda.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useUser } from '../context/UserContext';
import { useNavigate } from "react-router-dom";


export default function Instructions() {
  const { userName } = useUser();
  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/background')}
  return (
    <div className="instructions-container">
      <div className="instructions-white-half-part">
        <div className="instruction-content">
          <div className="instruction-heading">
            <h1>Instructions</h1>
          </div>
          <div className="instruction-points">
            <p>
              <span>1. </span> The test is divided into 3 parts- Select the
              greatest number, match the following, fill in the blanks.
            </p>
            <p>
              <span>2. </span> You can navigate between the 3 parts by selecting
              the three buttons given below the question box.
            </p>
            <p>
              <span>3. </span> You can also navigate between the parts by
              selecting the “Prev” and “Next” buttons on the left and right side
              of the page.
            </p>

            <p>
              <span>4. </span> To navigate between questions, you can click on
              the question number from the islands at the top of the page.
            </p>
            <p>
              <span>5. </span> Once you selected an answer, the island of that
              question number will get highlighted.
            </p>
            <p>
              <span>6. </span> You can submit anytime, the Submit button is
              given at the bottom right of the page.
            </p>
          </div>
          <div className="instruction-button">
            <button onClick={()=>handleStart()}>
              <div className="flex flex-row gap-2">
                <p>Start here</p>
                <FaArrowRightLong className="self-center text-xl"/>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="instructions-colored-half-part">
        <p>Hello {userName}!</p>
        <p>
          {" "}
          Read the instructions carefully before attempting the test. All the
          best!
        </p>
        <img src={gudda} alt="Gudda" className="instruction-gudda" />
      </div>
    </div>
  );
}
