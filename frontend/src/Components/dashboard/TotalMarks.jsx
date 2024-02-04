import styled from "styled-components";
import dashboardSticker from "../../assets/dashboardSticker.png";
import showMarks from "../../assets/showMarks.png";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useQuestionContext } from "../../context/QuestionContext";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function TotalMarks({ setAllAnswersVisible }) {
  const navigate = useNavigate();
  const handleShowAvatars = () => {
    navigate('/showavatars');
}
  const [marks, setMarks]=useState(0);
  const { userName, avatar, rollNo, isGuest } = useUser();
  const { questionStatus } = useQuestionContext();
  const handleRetry = () => {
    navigate("/questions");
    window.location.reload();
  };
  const handleLogOut = () => {
    navigate("/login");
  };

  const handleShowAllAns = () => {
    setAllAnswersVisible(true);
  };

  useEffect(() => {
    let cnt = 0;
    console.log(questionStatus);
    for (let i = 0; i < 2; i++) {
      if (questionStatus[i + 1][1] === questionStatus[i + 1][2]) {
        cnt++;
      }
    }
    for (let i = 2; i < 6; i++) {
      if (questionStatus[i + 1][1] === questionStatus[i + 1][3]) {
        cnt++;
      }
    }
    for (let i = 6; i < 10; i++) {
      if (
        Number.parseInt(questionStatus[i + 1][1]) === questionStatus[i + 1][2]
      ) {
        cnt++;
      }
    }
    setMarks(cnt);
  },  [questionStatus]);;

  const sendDataToBackend = async () => {
    try {
      const data = await axios.post("https://literacyapp-backend.onrender.com/result", {
        rollNo: rollNo,
        marks: marks,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    sendDataToBackend();
  }, [marks, rollNo]);

  return (
    <Container>
      <div className="dashboard-container">
        <div className="options-container">
          <div className="marks-container">
            <div className="details-marks-container">
              <div className="profile-container">
                <div>
                  <img src={avatar} alt="" />
                </div>
                <div className="student-credentials">
                  <h1>Hi! {userName}</h1>
                  {!isGuest && <h3>Roll no.{rollNo} </h3>}
                </div>
              </div>
            </div>
            <div className="total-marks">
              <h3>Your Total Marks</h3>
              <h1>{marks}/10</h1>
            </div>
            <img src={showMarks} alt="show marks" />
          </div>
          <div className="options">
            <div className="retry">
              <button onClick={() => handleRetry()}>Retry</button>
            </div>
            <div className="logout">
              <button onClick={() => handleLogOut()}>Logout</button>
            </div>
          </div>
          <div className="show-all-ans">
            <button onClick={handleShowAllAns}>Show All Answers</button>
          </div>
        </div>
        <div className="show-stickers-container">
          <h3>You unlocked a legendary sticker.</h3>
          <div className="unlocked-sticker">
            <img src={dashboardSticker} alt="sticker" />
            <p>sticker name</p>
          </div>
          <h4 style={{ marginInline: "6%" }}>
            Score full marks to get a legendary sticker.
          </h4>
          <div className="show-all-stickers">
            <button onClick={() => handleShowAvatars()}>All Stickers</button>
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
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  position: relative;
  z-index: 1;
  .dashboard-container {
    display: flex;
    flex-direction: row;
    height: 70%;
    width: 80%;
    gap: 2%;
    .options-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 70%;
      gap: 3%;
      .marks-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70%;
        width: 100%;
        align-items: flex-start;
        position: relative;
        .details-marks-container {
          position: absolute;
          top: 5%;
          left: 5%;
          display: flex;
          flex-direction: column;
          gap: 2%;
          z-index: 3;
          .profile-container {
            display: flex;
            flex-direction: row;
            gap: 5rem;
            .student-credentials {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
              line-height: 1;
              h1 {
                font-size: 2rem;
                font-weight: 600;
              }
            }
          }
        }
        .total-marks {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          height: 25%;
          width: 100%;
          z-index: 4;
          margin-left: 30%;
          h3 {
            font-size: 1rem;
            font-weight: 400;
            line-height: 1;
          }
          h1 {
            font-size: 3rem;
            font-weight: 600;
            line-height: 1;
            margin-bottom: 10%;
          }
        }
        img {
          position: absolute;
          height: 100%;
          border-radius: 10px;
          z-index: 2;
        }
      }
      .options {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 15%;
        width: 100%;
        gap: 3%;
        .retry {
          height: 100%;
          width: 50%;
          button {
            height: 100%;
            width: 100%;
            padding: 1rem 2rem;
            background: #fff;
            color: #ad7900;
            border: none;
            border-radius: 1rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            border: 2px solid #e5e5e5;
            border-radius: 10px;
          }
        }
        .logout {
          height: 100%;
          width: 50%;
          button {
            height: 100%;
            width: 100%;
            padding: 1rem 2rem;
            background: #fff;
            color: #ad7900;
            border: none;
            border-radius: 1rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            border: 2px solid #e5e5e5;
            border-radius: 10px;
          }
        }
      }
      .show-all-ans {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15%;
        width: 100%;
        button {
          height: 100%;
          width: 100%;
          padding: 1rem 2rem;
          background: #ffc81b;
          color: #000;
          border: none;
          border-radius: 1rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 10px;
        }
      }
    }
    .show-stickers-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 30%;
      gap: 7%;
      text-align: center;
      border-radius: 10px;
      border: 2px solid #e5e5e5;
      background: #fff;
      h3 {
        font-size: clamp(1.2rem, 1.5vw, 4rem);
        font-weight: 600;
        line-height: 1;
      }
      .unlocked-sticker {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        img {
          border: 0.4rem solid #6153cc;
          padding: 0.4rem;
          border-radius: 50%;
          width: 70%;
        }
        h4 {
          font-size: clamp(1rem, 1.5vw, 2rem);
        }
      }
      .show-all-stickers {
        button {
          padding: 1rem 2rem;
          background: #6153cc;
          color: #fffcf4;
          border: none;
          border-radius: 1rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 8px;
        }
      }
    }
  }
  @media (min-width: 1250px) {
    .marks-container img {
      width: 100%;
    }
  }
`;
