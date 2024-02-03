import React from 'react'
import './Navbar.css'
import bar from "../assets/bar.png";
import p1 from "../assets/p1.svg";
export default function Navbar() {
  return (
    <>
      <div className='navbar-container'>
        <img className='navbar-bar' src={bar} alt='bar' />
        <div className='bars'>
          <img src={p1} alt="p1" />
          <img src={p1} alt="p1" />
          <img src={p1} alt="p1" />
          <img src={p1} alt="p1" />
          <img src={p1} alt="p1" />
          <img src={p1} alt="p1" />
          <img src={p1} alt="p1" />
          <img src={p1} alt="p1" />
          <img src={p1} alt="p1" />
          <img src={p1} alt="p1" />
        </div>
      </div>
    </>
  )
}
