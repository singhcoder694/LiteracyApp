import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from "../config/supabseClient";
import Spline from "@splinetool/react-spline";

function Login() {
  const navigate = useNavigate();


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
  const [rollNo, setRollNo] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmission = async (e) => {
    console.log(name, rollNo);
    e.preventDefault();
    if (!name || !rollNo) {
      setFormError("Please fill out all the fields");
      return;
    }

    const { data, error } = await supabase
      .from("Login")
      .insert([{ name, rollNo }]);
    if (error) {
      console.log(error);
      setFormError("An error occured while submitting the form");
      return;
    }
    if (data) {
      console.log(data);
      setFormError("");
    }

  }

  
  return (
    <div className="flex flex-row h-screen font-sf-pro-rounded">
      <div className="flex flex-col gap-y-8  mr-72 ml-40 justify-center">
      <h1 className="text-5xl text-custom-yellow" style={textcolor}>Welcome!</h1>
        <p className="text-2xl text-custom-yellow"style={textcolor}>Login</p>
        <div className="flex flex-col gap-4 w-22vw">
          <h2>Name:</h2>
          <input
            type="text"
            placeholder="Place Your Name"
            className="bg-custom-grey rounded-md p-2 text-center"
            style={backgroundcolor}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2>Roll No:</h2>
          <input
            type="text"
            placeholder="Place Your Roll No"
            className="bg-custom-grey rounded-md p-2 text-center"
            style={backgroundcolor}
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
          <button className="bg-custom-yellow py-2 rounded-md self-center w-full text-black " style={backgroundcolorbutton} onClick={handleSubmission}>
            <div className="flex flex-row justify-center gap-2">
              <p>Let's Get Started!</p>
              <FaArrowRightLong className="text-2xl" />
            </div>
          </button>
          {formError && <p>{formError}</p>}
          
          
          <div className="flex flex-row gap-1">
            <p>Didn't have a Account?</p>
            <a
              onClick={() => handleLogin("/register")}
              className="text-yellow-500 hover:text-yellow-300 cursor-pointer"
            >
              Register Now
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
