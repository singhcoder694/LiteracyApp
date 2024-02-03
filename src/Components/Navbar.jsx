import React, { useEffect } from 'react'
import './Navbar.css'
import bar from "../assets/bar.png";
import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import p4 from "../assets/p4.svg";
import p5 from "../assets/p5.svg";
import p6 from "../assets/p6.svg";
import p7 from "../assets/p7.svg";
import p8 from "../assets/p8.svg";
import p9 from "../assets/p9.svg";
import p10 from "../assets/p10.svg";
// import p9 from "../assets/p9.svg";
import { useQuestionContext } from '../context/QuestionContext';
export default function Navbar() {
  const { questionStatus } = useQuestionContext();
  // useEffect(() => {
  //   console.log(questionStatus)
  // },[questionStatus])
  return (
    <>
      <div className='navbar-container'>
        <img className='navbar-bar' src={bar} alt='bar' />
        <div className='bars'>
          {questionStatus[0]?<img src={p1} alt="p1" />:<img src={p1} alt="p1" style={{filter:"grayscale(100%)"}}/>}
          {questionStatus[1]?<img src={p2} alt="p2" />:<img src={p3} alt="p2" style={{filter:"grayscale(100%)"}}/>}
          {questionStatus[2]?<img src={p3} alt="p3" />:<img src={p3} alt="p3" style={{filter:"grayscale(100%)"}}/>}
          {questionStatus[3]?<img src={p4} alt="p4" />:<img src={p4} alt="p4" style={{filter:"grayscale(100%)"}}/>}
          {questionStatus[4]?<img src={p5} alt="p5" />:<img src={p5} alt="p5" style={{filter:"grayscale(100%)"}}/>}
          {questionStatus[5]?<img src={p6} alt="p6" />:<img src={p6} alt="p6" style={{filter:"grayscale(100%)"}}/>}
          {questionStatus[6]?<img src={p7} alt="p7" />:<img src={p7} alt="p7" style={{filter:"grayscale(100%)"}}/>}
          {questionStatus[7]?<img src={p8} alt="p8" />:<img src={p8} alt="p8" style={{filter:"grayscale(100%)"}}/>}
          {questionStatus[8]?<img src={p9} alt="p9" />:<img src={p9} alt="p9" style={{filter:"grayscale(100%)"}}/>}
          {questionStatus[9]?<img src={p10} alt="p10" />:<img src={p10} alt="p10" style={{filter:"grayscale(100%)"}}/>}
        </div>
      </div>
    </>
  )
}
