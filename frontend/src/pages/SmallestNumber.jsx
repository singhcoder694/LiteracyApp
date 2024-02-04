import React, {useEffect} from "react";
import NumberSection from "../Components/NumberSection";
import "./SmallestNumber.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function SmallestNumber() {
  const buttonValues1 = ['a',39,24,78,90];
  const buttonValues2 = ['b',13,56,87,44];
  useEffect(()=>{
    AOS.init({
        duration:500
    });
},[]);
  return (
    <>
        <div
          className="smallest_number_container" data-aos="zoom-in"
        >
          <NumberSection sectionLabel="Part A" buttonValues1={buttonValues1}  buttonValues2={buttonValues2}/>
        </div>
    </>
  );
}
