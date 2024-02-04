import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import sticker1 from "../../assets/sticker/Legendary/Legendary 1.png";
import sticker2 from "../../assets/sticker/Legendary/Legendary 2.png";
import sticker3 from "../../assets/sticker/Legendary/Legendary 3.png";
import sticker4 from "../../assets/sticker/Legendary/Legendary 4.png";
import sticker5 from "../../assets/sticker/Legendary/Legendary 5.png";
import sticker6 from "../../assets/sticker/Legendary/Legendary 6.png";
import sticker7 from "../../assets/sticker/Legendary/Legendary 7.png";
import sticker8 from "../../assets/sticker/Legendary/Legendary 8.png";
import sticker9 from "../../assets/sticker/Legendary/Legendary 9.png";
import { useNavigate } from "react-router-dom";


export default function ShowAvatars({setShowAvatarsVisible}) {
  const [selectedButton, setSelectedButton] = useState("common");
  const navigate = useNavigate();

  const handleBack = () => {
    // navigate('/dashboard');
    setShowAvatarsVisible(false);
  }
  

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const stickerMap = [
    {
      name: "sticker1",
      src: sticker1,
    },
    {
      name: "sticker2",
      src: sticker2,
    },
    {
      name: "sticker3",
      src: sticker3,
    },
    {
      name: "sticker4",
      src: sticker4,
    },
    {
      name: "sticker5",
      src: sticker5,
    },
    {
      name: "sticker6",
      src: sticker6,
    },
    {
      name: "sticker7",
      src: sticker7,
    },
    {
      name: "sticker8",
      src: sticker8,
    },
    {
      name: "sticker9",
      src: sticker9,
    },

  ];

  const renderAvatars = () => {
    if (selectedButton === "legendary") {
      return stickerMap.slice(0, 1).map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt={avatar.name}
          className="w-24 h-24"
        />
      ));
    }
    if (selectedButton === "epic") {
      return stickerMap.slice(1, 3).map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt={avatar.name}
          className="w-28 h-28"
        />
      ));
    }
    if (selectedButton === "rare") {
      return stickerMap.slice(3, 4).map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt={avatar.name}
          className="w-28 h-28"
        />
      ));
    }
    else{
      return stickerMap.slice(4, 5).map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt={avatar.name}
          className="w-28 h-28"
        />
      ));
    }

    // If no condition matches, return an empty array

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
        <div className="bg-white opacity-75  mt-15vh w-1/3 h-4/5 rounded-3xl mx-20 px-6  gap-y-20" style={{display:"grid" , gridTemplateColumns:"1fr 1fr",placeContent:"center"}}>
          {renderAvatars()}
        </div>
        {/* <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url(${rocket})`, backgroundSize: 'cover',backgroundPosition:'center' }}></div> */}
      </div>
    </div>
  );
}
