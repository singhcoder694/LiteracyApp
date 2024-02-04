import React from 'react'
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

export default function RocketSpline() {
  return (
    <Container>
      <Spline scene="https://prod.spline.design/ZlzzAALwFCOlJYfD/scene.splinecode" />
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100vh;
    width: 70%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
`;

