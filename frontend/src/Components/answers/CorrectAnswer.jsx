import React from "react";
import styled from "styled-components";
import { FaTimes, FaCheck } from "react-icons/fa";

export default function CorrectAnswer() {
  return (
    <Container>
      <div className="ans-icon">
        <FaCheck size={60} color="#4CAF50" />
      </div>

      <div className="answer">
        <div className="ques-number">
          <h5>2)</h5>
        </div>

        <div className="ques-ans">
          <h3>Right Answer</h3>
          <p>Right Answer</p>
        </div>
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
  height: 6rem;
  gap: 1rem;
  border: 2px solid #E5E5E5;
  background-color: #fff;
  gap: 5%;

  .ans-icon {
    display: flex;
    align-items: center;
  }

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
`;
