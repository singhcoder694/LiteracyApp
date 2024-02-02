import react from "react";
import "./Background.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import gudda from "../assets/images/Gudda.jpg";
import React from "react";
import SmallestNumber from "../pages/SmallestNumber";


export default function Background() {
  return (
    <div className="background-container">
      <div>
        <div className="prev-button">
          <IoIosArrowBack className="back-icon" />
          <button>Prev</button>
        </div>
      </div>
      <div className="component-conntainer">
        <SmallestNumber />
      </div>
      <div className="mascot-contaier">
        <p>Click on the button having the greatest value.</p>
        <img src={gudda} alt="Gudda" className="instruction-gudda" />
      </div>
      <div>
        <div className="next-button">
          <IoIosArrowForward className="back-icon" />
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
