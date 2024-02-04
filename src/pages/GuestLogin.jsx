import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { FaArrowRightLong } from "react-icons/fa6"; // Importing with react-icons
import { useNavigate } from "react-router-dom";

function GuestLogin() {
  const [currentPage, setCurrentPage] = useState("guest");
  const [classValue, setClassValue] = useState(""); // State to hold the input value
  const [classError, setClassError] = useState(""); // State to hold validation error message

  const customGradientStyle = {
    backgroundImage: "linear-gradient(180deg, #6153CC 0%, #D0C6FF 100%)",
  };
  const navigate = useNavigate();

  const backgroundcolor = {
    backgroundColor: "#F5F5F5",
  };
  const backgroundcolorbutton = {
    backgroundColor: "#6153CC",
  };

  const handleGuest = (path) => {
    navigate(path, { state: { currentPage: "guest" } });
  };

  const handleRegister = (path) => {
    setCurrentPage("register"); // Set currentPage to "register" when navigating to the register page
    navigate(path);
  };

  const handleClassChange = (e) => {
    if (e.target.value === "") {
      setClassError("Class is required"); 
    }
    if (isNaN(e.target.value)) {
      setClassValue("")
      setClassError("Class should be between 1 and 10"); 
    }
    if (e.target.value >= 1 && e.target.value <= 10) {
      setClassValue(e.target.value); 
      setClassError(""); 
    } else {
      e.target.value = e.target.value.slice(0, 1); // Set the input value to the first character if the input value is greater than 10
      setClassError("Class should be between 1 and 10"); // Set the classError state if the input value is empty
    }
  };

  return (
    <div className="flex flex-row h-screen font-sf-pro-rounded">
      <div className="flex flex-col gap-y-8  mr-72 ml-52   justify-center">
        <h1 className="text-5xl text-indigo-700">Welcome!</h1>
        <p className="text-2xl">Guest Login</p>
        <div className="flex flex-col gap-4 w-22vw">
          <h2>Name:</h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="bg-custom-grey rounded-md p-2 text-center"
            style={backgroundcolor}
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
          <button
            className="bg-custom-purple py-2 rounded-md self-center w-full text-white"
            style={backgroundcolorbutton}
            onClick={() => handleGuest("/guestAvatar")}
          >
            <div className="flex flex-row justify-center gap-2">
              <p>Let's Get Started!</p>
              <FaArrowRightLong className="text-2xl" />
            </div>
          </button>
          <div className="flex flex-row">
            <hr className="w-1/2 self-center"></hr>
            <p className="text-xs">or</p>
            <hr className="w-1/2 self-center"></hr>
          </div>
          <button
            onClick={() => handleGuest("/login")}
            className="bg-custom-purple py-2 rounded-md self-center w-full text-white"
            style={backgroundcolorbutton}
          >
            <div className="flex flex-row justify-center gap-2">
              <p>Login with Roll No.</p>
              <FaArrowRightLong className="text-2xl" />
            </div>
          </button>
          <div className="flex flex-row gap-1">
            <p>Didn't have an Account?</p>
            <a
              onClick={() => handleRegister("/register")}
              className="text-blue-600 hover:text-sky-400 cursor-pointer"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
      <div style={customGradientStyle} className="w-full">
        <div className="w-1/2 absolute left-0 ml-40% h-full">
          <Spline scene="https://prod.spline.design/qzSyKoTbtbS8nUnH/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
export default GuestLogin;
