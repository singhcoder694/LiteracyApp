import React from 'react';
import styled from 'styled-components';
import dashboardSticker from '../../assets/dashboardSticker.png';
import showMarks from '../../assets/showMarks.png';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function TotalMarks() {
  const navigate = useNavigate();
  const handleShowAvatars = () => {
    navigate('/showavatars');
  }

  const { userName, avatar } = useUser();

  return (
    <Container>
      <div className='dashboard-container'>
        <div className="options-container">
          <div className="marks-container">
            <div className='details-marks-container'>
              <div className='profile-container'>
                <div>
                  <img src={avatar} alt="" />
                </div>
                <div className='student-credentials'>
                  <h1>Hi! {userName}</h1>
                  <h3>Roll no. </h3>
                </div>
              </div>
            </div>
            <div className='total-marks'>
              <h3>Your Total Marks</h3>
              <h1>10/10</h1>
            </div>
            <img src={showMarks} alt="show marks" />
          </div>
          <div className="options">
            <div className="retry">
              <button>Retry</button>
            </div>
            <div className="logout">
              <button>Logout</button>
            </div>
          </div>
          <div className="show-all-ans">
            <button>Show All Answers</button>
          </div>
        </div>
        <div className="show-stickers-container">
          <h3>You unlocked a legendary sticker.</h3>
          <div className="unlocked-sticker">
            <img src={dashboardSticker} alt="sticker" />
            <p>sticker name</p>
          </div>
          <h4>Score full marks to get a legendary sticker.</h4>
          <div className="show-all-stickers">
            <button onClick={() => handleShowAvatars()}>Show All Stickers</button>
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
    background: #FFFCF4;
    position: relative;
    z-index: 1;
    .dashboard-container {
        display: flex;
        flex-direction: row;
        height: 70%;
        width: 70%;
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
                        color: #AD7900;
                        border: none;
                        border-radius: 1rem;
                        font-size: 1rem;
                        font-weight: 600;
                        cursor: pointer;
                        border: 2px solid #E5E5E5;
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
                        color: #AD7900;
                        border: none;
                        border-radius: 1rem;
                        font-size: 1rem;
                        font-weight: 600;
                        cursor: pointer;
                        border: 2px solid #E5E5E5;
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
                        background: #FFC81B;
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
            border: 2px solid #E5E5E5;
            background: #fff;
            h3 {
                font-size: 1.5rem;
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
                        border: 0.4rem solid #6153CC;
                        padding: 0.4rem;
                        border-radius: 50%;
                    width: 70%;
                }
            }
            .show-all-stickers {
                button {
                    padding: 1rem 2rem;
                    background: #6153CC;
                    color: #FFFCF4;
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
`;

