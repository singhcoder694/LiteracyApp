import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";
import { Buffer } from "buffer";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import dashboardSticker from '../assets/dashboardSticker.png';

export default function SetAvatar() {

  const api = "https://api.multiavatar.com/45678945";
  const navigate = useNavigate();

  // const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const avatars = [dashboardSticker,dashboardSticker,dashboardSticker,dashboardSticker]

  const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
    }

    const handleSelectSticker = () => {
      if(selectedAvatar === undefined){
        toast.error("Please select a sticker.", toastOptions);
      }
      else{
      navigate('/dashboard');
      }
    }

  // const setProfilePicture = async () => {
  //   if (selectedAvatar === undefined) {
  //     toast.error("Please select an avatar.", toastOptions);
  //   } else {
  //     const user = await JSON.parse(localStorage.getItem("chat-app-user"));
  //     const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
  //       image: avatars[selectedAvatar],
  //     });

  //     if (data.isSet) {
  //       user.isAvatarImageSet = true;
  //       user.avatarImage = data.image;
  //       localStorage.setItem("chat-app-user", JSON.stringify(user));
  //       navigate("/");
  //     } else {
  //       toast.error("Error setting avatar. Please try again.", toastOptions);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = [];
  //     for (let i = 0; i < 4; i++) {
  //       const image = await axios.get(
  //         `${api}/${Math.round(Math.random() * 1000)}`
  //       );
  //       const buffer = new Buffer(image.data);
  //       data.push(buffer.toString("base64"));
  //     }
  //     setAvatars(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <Container>
      <AvatarContainer>
        <div className="back-btn-left" onClick={() => navigate("/guest")}>
          <div className="circular-back-button">
            <BiArrowBack />
          </div>
          <button>Back</button>
        </div>

        <div className="main-heading">
          <h3>Select a sticker</h3>
        </div>

        <div className="avatar-container">
          <div className="title-container">
            <h3>Pick an avatar as your profile picture</h3>
          </div>

          <div className="avatars">
            {avatars.map((avatar, index) => {
              return (
                <div
                  key={index}
                  className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
                >
                  <img
                    src={`${avatar}`}
                    alt="avatar"
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>

          <button 
            className="submit-btn" 
            onClick={handleSelectSticker}>
          Select Sticker <AiOutlineArrowRight />
          </button>
        </div>
        <ToastContainer />
      </AvatarContainer>

      <ChildContainer>
        {/* ... (content for ChildContainer) */}
      </ChildContainer>

      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%; 
  background: linear-gradient(to bottom, #6153CC, #C1B4FF);
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%;
  gap: 10%;
  .back-btn-left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    position: absolute;
    top: 10%;
    left: 5%;
    .circular-back-button{
      background-color: #6153CC;
      color: white;
      border: none;
      border-radius: 50%;
      padding: 0.5rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .main-heading {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #6153CC;
    h3 {
      font-size: 40px;
      font-weight: 500;
      color: #6153CC;
    }
  }
  .title-container {
    display: flex;
    justify-content: center;
    width: 100%;
    h3 {
      font-size: 20px;
      font-weight: 500;
    }
  } 
  .avatar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatars {
        display: flex;
        gap: 2rem;
        .avatar {
            border: 0.4rem solid transparent;
            padding: 0.4rem;
            border-radius: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.5s ease-in-out;
            cursor: pointer;
            img {
                height: 6rem;
            }
        }
        .selected {
            border: 0.4rem solid #6153CC;
        }
    }
    .submit-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            flec-direction: row;
            gap: 1rem;
            background: #6153CC;
            width: 50%;
            height: 3rem;
            border: none;
            border-radius: 0.4rem;
            padding: 1rem 2rem;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
    }
  }
`;
