import React from "react";
import styled from "styled-components";
import Mascot from "../../assets/images/gudda.png";

export default function FirstPageLoader() {
  return (
    <Container>
      <div className="loader-greeting">
        <h1>Welcome!</h1>
        <h3>My name is Guddu. Nice to meet you!</h3>
      </div>

      <div className="loader-mascot-container">
        <h4>What is your name?</h4>
        <img src={Mascot} alt="" />
      </div>
    </Container>
  );
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
  height: 100vh;
  width: 100vw;
  background: #f9eed2;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6153CC;
  .loader-greeting {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 2.5rem;
      font-weight: 600;
    }
    h3 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
  .loader-mascot-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    gap: 1rem;
    h4 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  img {
    height: 80%;
  }
  }

  
`;
