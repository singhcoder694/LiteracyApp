import React from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import WrongAnswer from "../answers/WrongAnswer";
import CorrectAnswer from "../answers/CorrectAnswer";
import { useQuestionContext } from "../../context/QuestionContext";
export default function AllAnswers({setAllAnswersVisible}) {

  const handleBackToDashboard = () => {
    setAllAnswersVisible(false);
  }
  const {questionStatus} = useQuestionContext();
  return (
    <Container>
      <div className="all-ans-container">
        <div className="back-btn">
          <button onClick={handleBackToDashboard}>
            <div className="back-arrow">
              <FaArrowUp size={20} color="black" />
            </div>
            <div className="back-text">Back</div>
          </button>
        </div>

        <div className="ans-container">
          <div className="ans-heading">
            <h3>All Answers</h3>
          </div>

          <div className="all-ans">
            {questionStatus[1][1] === questionStatus[1][2]?<CorrectAnswer question="Select the Smallest Number" option="39 24 78 90" />:<WrongAnswer  question="Select the Smallest Number" option="39 24 78 90" user_ans={questionStatus[1][1]}real_ans={questionStatus[1][2]} />}
            {questionStatus[2][1] === questionStatus[2][2]?<CorrectAnswer question="Select the Smallest Number" option="13 56 87 44" />:<WrongAnswer  question="Select the Smallest Number" option="13 56 87 44" user_ans={questionStatus[2][1]}real_ans={questionStatus[2][2]} />}
            {questionStatus[3][1] ===questionStatus[3][3]?<CorrectAnswer question="Match the following" option="23 + 34" />:<WrongAnswer  question="Match the following" option="23 + 34" user_ans={questionStatus[3][1]}real_ans={questionStatus[3][3]} />}
            {questionStatus[4][1] === questionStatus[4][3]?<CorrectAnswer question="Match the following" option="2 + 54" />:<WrongAnswer  question="Match the following" option="2 + 34" user_ans={questionStatus[4][1]}real_ans={questionStatus[4][3]} />}
            {questionStatus[5][1] === questionStatus[5][3]?<CorrectAnswer question="Match the following" option="9 + 89" />:<WrongAnswer  question="Match the following" option="9 + 89" user_ans={questionStatus[5][1]}real_ans={questionStatus[5][3]} />}
            {questionStatus[6][1] === questionStatus[6][3]?<CorrectAnswer question="Match the following" option="34 + 94" />:<WrongAnswer  question="Match the following" option="34 + 94" user_ans={questionStatus[6][1]}real_ans={questionStatus[6][3]} />}
            {Number.parseInt(questionStatus[7][1]) === questionStatus[7][2]?<CorrectAnswer question="Fill in the balnk" option="92 + 3" />:<WrongAnswer  question="Fill in the blank" option="92 + 3" user_ans={questionStatus[7][1]}real_ans={questionStatus[7][2]} />}
            {Number.parseInt(questionStatus[8][1]) === questionStatus[8][2]?<CorrectAnswer question="Fill in the balnk" option="79 + 54" />:<WrongAnswer  question="Fill in the blank" option="79 + 54" user_ans={questionStatus[8][1]}real_ans={questionStatus[8][2]} />}
            {Number.parseInt(questionStatus[9][1]) === questionStatus[9][2]?<CorrectAnswer question="Fill in the balnk" option="66 + 75" />:<WrongAnswer  question="Fill in the blank" option="66 + 75" user_ans={questionStatus[9][1]}real_ans={questionStatus[9][2]} />}
            {Number.parseInt(questionStatus[10][1]) === questionStatus[10][2]?<CorrectAnswer question="Fill in the balnk" option="18 + 41" />:<WrongAnswer  question="Fill in the blank" option="18 + 41" user_ans={questionStatus[10][1]}real_ans={questionStatus[10][2]} />}
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 70%;
  background: #fffcf4;
  position: absolute;
  z-index: 20;
  overflow-y: scroll;

  .all-ans-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 5%;

    .back-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 0.5rem;
      margin-top: 20%;

      button {
        color: black;
        border: none;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-weight: 500;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        .back-arrow {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 3rem;
          width: 3rem;
          background: #ffc81b;
          border-radius: 50%;
          transition: transform 0.3s ease-in-out;

          &:hover {
            transform: rotate(180deg);
          }
        }
      }
    }

    .ans-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      width: 100%;

      .ans-heading {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 10%;
        width: 100%;

        h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
      }

      .all-ans {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;

        .ans {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border: 1px solid #ff0033;
          border-radius: 5px;
          width: 70%;

          p {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;
