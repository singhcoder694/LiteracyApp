import React from 'react'
import styled from 'styled-components';
import rocket from '../../assets/rocket.svg';

export default function RocketSpline() {
  return (
    <Container>
      <img src={rocket} alt="" />
    </Container>
  )
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
    z-index: -1;
    background: linear-gradient(180deg, #6153CC 0%, #FFE99E 100%);
    img {
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;

