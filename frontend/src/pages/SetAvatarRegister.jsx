import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { useUser } from '../context/UserContext';
import dashboardSticker from '../assets/dashboardSticker.png';
import Spline from '@splinetool/react-spline';

export default function SetAvatar() {

 // const api = "https://api.multiavatar.com/45678945";
  const navigate = useNavigate();
  const {updateAvatar} = useUser()

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
      updateAvatar(avatars[selectedAvatar]);
      navigate('/instructions');

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
  //       updateAvatar(data.image);
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
        <div className="back-btn-left" onClick={() => navigate("/register")}>
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
      </AvatarContainer>

      <ChildContainer>
        <div className="mascot-container">
          <div className="mascot-dialog">
            <h3>Hello Name <br /> Select a sticker for your profile picture.</h3>
          </div>
          <div className="mascot-img">
          <Spline scale="0.5" scene="https://prod.spline.design/91ewobYvTm8z5Ve9/scene.splinecode" />
          </div>
        </div>
      </ChildContainer>

      <ToastContainer />
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
  background: linear-gradient(to bottom, #FF0033, #FA9596);
  .mascot-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10%;
    width: 50%;
    .mascot-dialog{
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        color: white;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }
    }
  }
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
      background-color: #FF0033;
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
    h3 {
      font-size: 40px;
      font-weight: 500;
      transition: 0.3s ease-in-out;
    }
    h3:hover{
      transform: scale(1.1);
    }
  }
  .title-container {
    display: flex;
    justify-content: center;
    width: 100%;
    h3 {
    color: #FF0033;
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
            border: 0.4rem solid #FF0033;
        }
    }
    .submit-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            flec-direction: row;
            gap: 1rem;
            background: #FF0033;
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
