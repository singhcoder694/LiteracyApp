import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaAngleDown } from "react-icons/fa";

export default function WrongAnswer() {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleShowCorrectAnswer = () => {
    setShowCorrectAnswer(!showCorrectAnswer);
  };

  return (
    <Container showCorrectAnswer={showCorrectAnswer}>
      <div className="ans-icon">
        <FaTimes size={60} color="#ff0033" />
      </div>

      <div className="answer">
        <div className="ques-number">
          <h5>1)</h5>
        </div>

        <div className="ques-ans">
          <h3>Wrong Answer</h3>
          <p>Wrong Answer</p>
          {showCorrectAnswer ? <p>the correct ans is: 22</p> : ""}
        </div>
      </div>

      <div className="show-correct-ans-btn">
        <button onClick={handleShowCorrectAnswer}>
          {showCorrectAnswer ? "Hide Correct Answer" : "Show Correct Answer"}
         <div className="ans-dropdown">
            <FaAngleDown />
          </div>
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  width: 70%;
  height: ${(props) => (props.showCorrectAnswer ? "10rem" : "6rem")};
  gap: 1rem;
  background-color: #ffceb7;
  gap: 5%;
  transition: all 0.3s ease-in-out;

  .answer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    gap: 2rem;
    .ques-number {
      h5 {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
    .ques-ans {
      h3 {
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }

  .show-correct-ans-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      flex-direction: column;
      color: black;
      padding: 0.5rem;
      gap: 0.5rem;
      font-weight: 500;
      .ans-dropdown {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        background-color: #fff;
        transform: ${(props) => (props.showCorrectAnswer ? "rotate(180deg)" : "rotate(0deg)")};
          }
      }
    }
  }
`;
