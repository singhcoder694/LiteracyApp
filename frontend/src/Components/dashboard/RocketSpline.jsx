import React from "react";
import styled from "styled-components";
import rocket from "../../assets/rocket.svg";

export default function RocketSpline() {
  return (
    <Container>
      <img src={rocket} alt="" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -20;
  background: linear-gradient(180deg, #6153cc 0%, #ffe99e 100%);
  overflow: hidden;
  img {
    position: absolute;
    top: -15%;
    right: -3%;
    @media screen and (max-width: 1200px) {
      top: 0;
      right: -5%;
    }
  }
`;
