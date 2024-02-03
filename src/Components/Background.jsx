import react from "react";
import "./Background.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import gudda from "../assets/images/Gudda.jpg";
import React from "react";
import SmallestNumber from "../pages/SmallestNumber";
import Navbar from "./Navbar";
import NavigationButton from "./NavigationButton";


export default function Background() {
  return (
    <>
      <Navbar />
      <div className="background-container">
        <div className="prev-button">
          <IoIosArrowBack className="back-icon" />
          <button>Prev</button>
        </div>
      <SmallestNumber />
      <div className="mascot-contaier">
        <p>Click on the button having the greatest value.</p>
        <img src={gudda} alt="Gudda" className="instruction-gudda" />
      </div>
        <div className="next-button">
          <IoIosArrowForward className="back-icon" />
          <button>Next</button>
        </div>
    </div>
    <NavigationButton />
    </>
    
  );
}
