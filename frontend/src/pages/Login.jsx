import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import Spline from "@splinetool/react-spline";
import { useUser } from "../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const { updateUser,updateRollNo } = useUser();


  const handleLogin = (path) => {
    navigate(path);
  };
  const customGradientStyle = {
    backgroundImage: "linear-gradient(180deg, #FFB507 0%, #FFE99E 100%)",
  };
  const backgroundcolor = {
    backgroundColor: "#F5F5F5",
  };
  const backgroundcolorbutton = {
    backgroundColor: "#FFB507",
  };
  const textcolor = {
    color: "#FFB507",
  };
  const [name, setName] = useState("");
  
  const [formError, setFormError] = useState(null);
  const [rollNo, setrollNo] = useState(""); // State to hold the input value
  const [RollNoError, setRollNoError] = useState(""); // State to hold validation error message

  const handleSubmission = async (e) => {
    console.log(name, rollNo);
    e.preventDefault();
    if (!name || !rollNo) {
      setFormError("Please fill out all the fields");
      return;
    }
    updateUser(name);
    updateRollNo(rollNo);
    try {
      const response = await axios.post('http://localhost:3001/login', {
        name: name,
        rollNo: rollNo,
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      setFormError("Invalid Credentials");
    }

  }

  const handleRollNoChange = (e) => {
    if (isNaN(e.target.value)) {
      setRollNoError("Enter Numbers Only"); 
      return;
    }
    else{
      setrollNo(e.target.value);
      setRollNoError("");
    }
  }; 
  return (
    <div className="flex flex-row h-screen font-sf-pro-rounded">
      <div className="flex flex-col gap-y-8  mr-72 ml-40 justify-center">
      <h1 className="text-5xl text-custom-yellow" style={textcolor}>Welcome!</h1>
        <p className="text-2xl text-custom-yellow"style={textcolor}>Login</p>
        <div className="flex flex-col gap-4 w-22vw">
          <h2>Name:</h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="bg-custom-grey rounded-md p-2 text-center"
            style={backgroundcolor}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2>Roll No:</h2>
          <input
            type="text"
            placeholder="Enter your Roll No"
            className="bg-custom-grey rounded-md p-2 text-center"
            style={backgroundcolor}
            value={rollNo}
            onChange={handleRollNoChange}
          />
           <p className="text-red-500">{RollNoError}</p>
          <button className="bg-custom-yellow py-2 rounded-md self-center w-full text-black " style={backgroundcolorbutton} onClick={handleSubmission}>
            <div className="flex flex-row justify-center gap-2">
              <p>Let's Get Started!</p>
              <FaArrowRightLong className="text-2xl" />
            </div>
          </button>
          {formError && <p className="text-red-500" > {formError}</p>}
          
          
          <div className="flex flex-row gap-1">
            <p>Didn't have a Account?</p>
            <a
              onClick={() => handleLogin("/register")}
              className="text-yellow-500 hover:text-yellow-300 cursor-pointer"
            >
              Register Now
            </a>
          </div>
          <div className="flex flex-row gap-1">
            <p>Give test without login?</p>
            <a
              onClick={() => handleLogin("/guest")}
              className="text-yellow-500 hover:text-yellow-300 cursor-pointer"
            >
              Guest
            </a>
          </div>
        </div>
      </div>
      <div style={customGradientStyle} className="w-full">
        <div className="w-1/2 absolute left-0 ml-40% h-full">
          <Spline scene="https://prod.spline.design/5warEIMc7vnGOzqV/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

export default Login;
