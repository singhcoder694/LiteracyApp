import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (path) => {
    navigate(path);
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
          />
          <h2>Roll No:</h2>
          <input
            type="text"
            placeholder="Place Your Roll No"
            className="bg-custom-grey rounded-md p-2 text-center"
            style={backgroundcolor}
          />
          <button className="bg-custom-yellow py-2 rounded-md self-center w-full text-black " style={backgroundcolorbutton}>
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
    </div>
  );
}

export default Login;
