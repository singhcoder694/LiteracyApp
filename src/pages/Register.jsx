import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import supabase from "../config/supabseClient";
import { useUser } from "../context/UserContext";
function Register() {
  const navigate = useNavigate();
  
  const handleLogin = (path) => {
    navigate(path);
  };
  const gradientStyle = {
    background: "linear-gradient(180deg, #F03 0%, #FA9596 100%)",
    height: "100vh", // Adjust the height as needed
  };
  const backgroundcolor = {
    backgroundColor: "#F5F5F5",
  };
  const backgroundcolorbutton = {
    backgroundColor: "#FF0033",
  };
  const textcolor = {
    color: "#FF0033",
  };
  const { updateUser } = useUser();
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [age, setAge] = useState("");
  const [formError, setFormError] = useState(null);
  const handleSubmission =  (e) => {
    
    e.preventDefault();
   
    if (!name || !className || !age) {
      setFormError("Please fill out all the fields");
      return;
    }
    const { data, error } =  supabase
      .from("Register")
      .insert([{ name, className, age }]);
    if (error) {
      console.log(error);
      setFormError("An error occured while submitting the form");
      return;
    }
    if (data) {
      console.log(data);
      setFormError(null);
      // updateUser(name);
      navigate("/instructions");
    }
    
  };

  return (
    <div className="flex flex-row h-screen font-sf-pro-rounded">
      <div className="flex flex-col gap-y-8  mr-72 ml-40 justify-center backdrop-blur-sm">
        <h1 className="text-5xl text-custom-red" style={textcolor}>
          Welcome!
        </h1>
        <p className="text-2xl text-custom-red" style={textcolor}>
          Register
        </p>
        <div className="flex flex-col gap-4 w-22vw">
          <h2>Name:</h2>
          <input
            type="text"
            placeholder="Place Enter Your Name"
            className="bg-custom-grey rounded-md p-2 text-center"
            style={backgroundcolor}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2>Class:</h2>
          <input
            type="text"
            placeholder="Place Enter Your Class"
            className="bg-custom-grey rounded-md p-2 text-center"
            style={backgroundcolor}
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <h2>Age:</h2>
          <input
            type="text"
            placeholder="Place Enter Your Age"
            className="bg-custom-grey rounded-md p-2 text-center"
            style={backgroundcolor}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button
            className="bg-custom-red py-2 rounded-md self-center w-full text-white"
            style={backgroundcolorbutton}
            onClick={handleSubmission}
          >
            <div className="flex flex-row justify-center gap-2">
              <p>Let's Get Started!</p>
              <FaArrowRightLong className="text-2xl" />
            </div>
          </button>
          {formError && <p className="text-red-700">{formError}</p>}

          <div className="flex flex-row gap-1">
            <p>Already have an account?</p>
            <a
              onClick={() => handleLogin("/login")}
              className="text-custom-red hover:text-red-400 cursor-pointer"
              style={textcolor}
            >
              Login
            </a>
          </div>
        </div>
      </div>
      <div style={gradientStyle} className="w-full">
        <div className="w-1/2 absolute left-0 ml-40% h-full">
          <Spline scene="https://prod.spline.design/BQ0bdFLdshLg8dr9/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
export default Register;
