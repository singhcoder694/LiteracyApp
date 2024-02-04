import React, { useState } from "react";
import styled, { css } from "styled-components";
import TotalMarks from "../Components/dashboard/TotalMarks";
import RocketSpline from "../Components/dashboard/RocketSpline";
import AllAnswers from "../Components/dashboard/AllAnswers";
import ShowAvatars from "../Components/dashboard/ShowAvatars";

export default function Dashboard() {
  const [isAllAnswersVisible, setAllAnswersVisible] = useState(false);
  const [isShowAvatarsVisible, setShowAvatarsVisible] = useState(false);

  return (
    <Container>
      <TotalMark isVisible={isAllAnswersVisible || isShowAvatarsVisible} stickers={isShowAvatarsVisible} allAnswer={isAllAnswersVisible}>
        <TotalMarks setAllAnswersVisible={setAllAnswersVisible} setShowAvatarsVisible={setShowAvatarsVisible} />
      </TotalMark>
      <AllAnswer isVisible={isAllAnswersVisible}>
        <AllAnswers setAllAnswersVisible={setAllAnswersVisible} />
      </AllAnswer>
      <ShowAvatar isStickerVisible={isShowAvatarsVisible}>
        <ShowAvatars setShowAvatarsVisible={setShowAvatarsVisible} />
      </ShowAvatar>
      <RocketSpline />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const TotalMark = styled.div`
  transition: all 0.4s ease-out;
  ${(props) =>
    (props.isVisible) && props.stickers &&
    css`
      transform: translate(-100vw, 0);
    `}
    ${(props) =>
    (props.isVisible) && props.allAnswer &&
    css`
      transform: translate(0, -100vh);
    `}
`;

const AllAnswer = styled.div`
  transition: all 0.4s ease-out;
  ${(props) =>
    !props.isVisible &&
    css`
      transform: translate(0, 0);
    `}
  ${(props) =>
    props.isVisible &&
    css`
      transform: translate(0, -100vh);
    `}
`;

const ShowAvatar = styled.div`
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
  position: relative;
  z-index: ${(props) => (props.isStickerVisible ? 1 : -10)};
  opacity: ${(props) => (props.isStickerVisible ? 1 : 0)};
  transform: translate(0, -100vh);
  ${'' /* transform: ${(props) => (props.isStickerVisible ? 'translate(0, -100vh)' : 'translate(0, 0)')}; */}
`;
