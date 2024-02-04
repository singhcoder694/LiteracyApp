import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import TotalMarks from '../Components/dashboard/TotalMarks';
import RocketSpline from '../Components/dashboard/RocketSpline';
import AllAnswers from '../Components/dashboard/AllAnswers';

export default function Dashboard() {
  const [isAllAnswersVisible, setAllAnswersVisible] = useState(false);

  return (
    <Container>
    <TotalMark>
      <TotalMarks setAllAnswersVisible={setAllAnswersVisible} />
      </TotalMark>
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
  overflow: hidden;
  transition: all 1s ease-in-out;
`;

const TotalMark = styled.div`
  transition: all 0.5s ease-in-out;
  ${props =>
    props.isVisible &&
    css`
      transform: translate(0, 100vh);
    `}
  ${props =>
    !props.isVisible &&
    css`
      transform: translate(0, 0);
    `}
`;

const AllAnswer = styled.div`
  transition: all 0.5s ease-in-out;
  ${props =>
    !props.isVisible &&
    css`
      transform: translate(0, 0);
    `}
  ${props =>
    props.isVisible &&
    css`
      transform: translate(0, -100vh);
    `}
`;
