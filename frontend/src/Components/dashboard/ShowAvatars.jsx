import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import avatar1 from "../../assets/avatars/Multiavatar-aditya.png";
import avatar2 from "../../assets/avatars/Multiavatar-anuk.png";
import avatar3 from "../../assets/avatars/Multiavatar-anushka.png";
import avatar4 from "../../assets/avatars/Multiavatar-dave.png";
import avatar5 from "../../assets/avatars/Multiavatar-ruhi.png";
import avatar6 from "../../assets/avatars/Multiavatar-shreya.png";
import rocket from '../../assets/rocket.svg';
import { useNavigate } from "react-router-dom";


export default function ShowAvatars({setShowAvatarsVisible}) {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  const handleBack = () => {
    // navigate('/dashboard');
    setShowAvatarsVisible(false);
  }
  

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const avaratMap = [
    {
      name: "avatar1",
      src: avatar1,
    },
    {
      name: "avatar2",
      src: avatar2,
    },
    {
      name: "avatar3",
      src: avatar3,
    },
    {
      name: "avatar4",
      src: avatar4,
    },
    {
      name: "avatar5",
      src: avatar5,
    },
    {
      name: "avatar6",
      src: avatar6,
    },
  ];

  const renderAvatars = () => {
    if (selectedButton === "legendary") {
      return avaratMap.slice(0, 1).map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt={avatar.name}
          className="w-28 h-28"
        />
      ));
    }
    if (selectedButton === "epic") {
      return avaratMap.slice(1, 3).map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt={avatar.name}
          className="w-28 h-28"
        />
      ));
    }
    if (selectedButton === "rare") {
      return avaratMap.slice(3, 4).map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt={avatar.name}
          className="w-28 h-28"
        />
      ));
    }
    if (selectedButton === "common") {
      return avaratMap.slice(4, 5).map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt={avatar.name}
          className="w-28 h-28"
        />
      ));
    }

    // If no condition matches, return an empty array
    return [];
  };

  return (
    <div className="flex flex-row -z-10">
      <div className="flex flex-col w-1/5 gap-20 h-screen">
        <div className="flex flex-col items-center mt-5">
          <button className="rounded-full bg-yellow-500 w-12 h-12 " onClick={()=>handleBack()}>
            <FaArrowLeft className="m-auto text-xl" />
          </button>
          <p>Back To Results</p>
        </div>
        <button
          className={`text-center border-slate-600 border-solid w-10vw mx-auto p-4 border-2 rounded-md ${selectedButton === 'legendary' ? 'bg-purple-400 transition-all duration-300' : ''}`}
          onClick={() => handleButtonClick('legendary')}
        >
          Legendary
        </button>
        <button
          className={`text-center border-slate-600 border-solid w-10vw mx-auto p-4 border-2 rounded-md ${selectedButton === 'epic' ? 'bg-purple-400 transition-all duration-300' : ''}`}
          onClick={() => handleButtonClick('epic')}
        >
          Epic
        </button>
        <button
          className={`text-center border-slate-600 border-solid w-10vw mx-auto p-4 border-2 rounded-md ${selectedButton === 'rare' ? 'bg-purple-400 transition-all duration-300' : ''}`}
          onClick={() => handleButtonClick('rare')}
        >
          Rare
        </button>
        <button
          className={`text-center border-slate-600 border-solid w-10vw mx-auto p-4 border-2 rounded-md ${selectedButton === 'common' ? 'bg-purple-400 transition-all duration-300' : ''}`}
          onClick={() => handleButtonClick('common')}
        >
          Common
        </button>
      </div>
      <div className="w-full relative" style={{ 
        background: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'right-top', // Adjust this value as needed
      }}>
        <div className="bg-white opacity-75 h-32 mt-15vh w-1/3 h-4/5 rounded-3xl mx-20 grid grid-cols-1 place-content-center gap-y-20">
          {renderAvatars()}
        </div>
        {/* <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url(${rocket})`, backgroundSize: 'cover',backgroundPosition:'center' }}></div> */}
      </div>
    </div>
  );
}
