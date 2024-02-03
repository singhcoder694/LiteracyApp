import React from 'react'
import styled from 'styled-components';
import dashboardSticker from '../../assets/dashboardSticker.png';
import showMarks from '../../assets/showMarks.png';

export default function TotalMarks() {
  return (
    <Container>
        <div className='dashboard-container'>
            <div className="options-container">
                <div className="marks-container">
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
                    <button>Show All Stickers</button>
                </div>
            </div>
        </div>
    </Container>
  )
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
                img {
                    position: absolute;
                    height: 100%;
                    border-radius: 10px;
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

