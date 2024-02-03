import react from "react";
import "./Background.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import gudda from "../assets/images/Gudda.jpg";
import React from "react";
import SmallestNumber from "../pages/SmallestNumber";
import Navbar from "./Navbar";
import NavigationButton from "./NavigationButton";
import MatchNumbers from "../pages/MatchNumbers";
import FillInTheBlanks from "../pages/FillInTheBlanks";


export default function Background() {
  return (
    <>
      <Navbar />
      <div className="background-container">
        <div className="prev-button nav-button-icon">
          <IoIosArrowBack className="back-icon" />
          <button>Prev</button>
        </div>
        <MatchNumbers/>
      {/* <SmallestNumber /> */}
      <div className="mascot-contaier">
        <p>Click on the button having the smallest value.</p>
        <img src={gudda} alt="Gudda" className="instruction-gudda" />
      </div>
        <div className="next-button nav-button-icon">
          <IoIosArrowForward className="back-icon" />
          <button>Next</button>
        </div>
    </div>
    <NavigationButton />
    </>
    
  );
}
