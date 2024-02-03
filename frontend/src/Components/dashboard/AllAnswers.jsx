import React from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import WrongAnswer from "../answers/WrongAnswer";
import CorrectAnswer from "../answers/CorrectAnswer";

export default function AllAnswers({setAllAnswersVisible}) {

  const handleBackToDashboard = () => {
    setAllAnswersVisible(false);
  }

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
            <WrongAnswer />
            <CorrectAnswer />
            <WrongAnswer />
            <CorrectAnswer />
            <CorrectAnswer />
            <CorrectAnswer />
            <CorrectAnswer />
            <CorrectAnswer />
            <CorrectAnswer />
            <CorrectAnswer />
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
  position: relative;
  z-index: 2;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

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
