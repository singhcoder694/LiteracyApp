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
    navigate(path, { state: { currentPage: "register" } });
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

  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");
  const [formError, setFormError] = useState(null);
  const [classValue, setClassValue] = useState("");
  const [classError, setClassError] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();

    if (!name || !classValue || !age) {
      setFormError("Please fill out all the fields");
      return;
    }
    const { data, error } = supabase.from("Register").insert([{ name }]);
    if (error) {
      console.log(error);
      setFormError("An error occured while submitting the form");
      return;
    }
    if (data) {
      console.log(data);
      setFormError(null);
      // updateUser(name);
      navigate("/registerAvatar");
    }
  };

  const handleClassChange = (e) => {
    if (isNaN(e.target.value)) {
      e.target.value = "";
      setClassError("Class should be between 1 and 10");
    }
    if (e.target.value >= 1 && e.target.value <= 10) {
      setClassValue(e.target.value);
      setClassError("");
    } else {
      e.target.value = e.target.value.slice(0, 1);
      setClassError("Class should be between 1 and 10");
      setClassValue("")
    }
  };

  const ageChange = (e) => {
    if (isNaN(e.target.value)) {
      setAgeError("Age should be a number");
      return;
    } else if (e.target.value >= 1 && e.target.value <= 20) {
      setAge(e.target.value);
      setAgeError("");
    } else {
      setAgeError("Are you 'kid-ing' me? Age should be between 1 and 20");
      setAge("");
      return;
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
        <div className="flex flex-col gap-2 w-22vw">
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
            type="text" // Set the type to text
            placeholder="Enter your Class"
            className="bg-custom-grey rounded-md p-2 text-center"
            style={backgroundcolor}
            onChange={handleClassChange}
            inputMode="numeric" // Specify the input mode
            pattern="[0-9]*" // Allow only numeric input
            value={classValue}
          />
          <p className="text-red-500">{classError}</p>
          <h2>Age:</h2>
          <input
            type="text"
            placeholder="Place Enter Your Age"
            className="bg-custom-grey rounded-md p-2 text-center"
            style={backgroundcolor}
            value={age}
            onChange={ageChange}
          />
          <p className="text-red-600">{ageError}</p>

          <div className="flex flex-col gap-4">
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
          <div className="flex flex-row gap-1">
            <p>Give test without login?</p>
            <a
              onClick={() => handleLogin("/guest")}
              className="text-custom-red hover:text-red-400 cursor-pointer"
              style={textcolor}
            >
              Guest
            </a>
          </div>
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
