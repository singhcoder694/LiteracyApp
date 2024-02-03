import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import TotalMarks from '../Components/dashboard/TotalMarks';
import RocketSpline from '../Components/dashboard/RocketSpline';
import AllAnswers from '../Components/dashboard/AllAnswers';

export default function Dashboard() {
  const [isAllAnswersVisible, setAllAnswersVisible] = useState(false);

  return (
    <Container>
      <TotalMarks setAllAnswersVisible={setAllAnswersVisible} />
      <AllAnswer isVisible={isAllAnswersVisible}>
        <AllAnswers setAllAnswersVisible={setAllAnswersVisible}/>
      </AllAnswer>
      <RocketSpline />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  ${'' /* overflow: hidden; */}
  transition: all 1s ease-in-out;
`;

const AllAnswer = styled.div`
  ${props =>
    props.isVisible &&
    css`
      transform: translate(0, -100vh);
      z-index: 200;
    `}
`;
