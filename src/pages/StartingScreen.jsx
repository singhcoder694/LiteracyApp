import React from "react";
import Spline from "@splinetool/react-spline";
import { FaArrowRightLong } from "react-icons/fa6"; // Importing with react-icons
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from "../config/supabseClient";

function Login() {
  const customGradientStyle = {
    backgroundImage: "linear-gradient(180deg, #6153CC 0%, #D0C6FF 100%)",
  };
  const navigate = useNavigate();
  const handleLogin = (path) => {
    navigate(path);
  };
  const backgroundcolor = {
    backgroundColor: "#F5F5F5",
  };
  const backgroundcolorbutton = {
    backgroundColor: "#6153CC",
  };
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmission = async (e) => {
    console.log(name, className);
    e.preventDefault();
    if (!name || !className) {
      setFormError("Please fill out all the fields");
      return;
    }

    const { data, error } = await supabase
      .from("Guest Login")
      .insert([{ name , className}]);
    if (error) {
      console.log(error);
      setFormError("An error occured while submitting the form");
      return;
    }
    if(data){
      console.log(data);
      setFormError(null);
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
            placeholder="Place Enter Your Name"
            className="bg-custom-grey rounded-md p-2 text-center"
            value={name}
            style={backgroundcolor}
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
          <button
            className="bg-custom-purple py-2 rounded-md self-center w-full text-white"
            style={backgroundcolorbutton}
            onClick={handleSubmission}
          >
            <div className="flex flex-row justify-center gap-2">
              <p>Let's Get Started!</p>
              <FaArrowRightLong className="text-2xl" />
            </div>
          </button>
          {formError && <p className="text-red-700">{formError}</p>}
          <div className="flex flex-row">
            <hr className="w-1/2 self-center"></hr>
            <p className="text-xs">or</p>
            <hr className="w-1/2 self-center"></hr>
          </div>
          <button
            onClick={() => {
              handleLogin("/login");
            }}
            className="bg-custom-purple py-2 rounded-md self-center w-full text-white"
            style={backgroundcolorbutton}
          >
            <div className="flex flex-row justify-center gap-2">
              <p>Login with Roll No.</p>

              <FaArrowRightLong className="text-2xl" />
            </div>
          </button>
          <div className="flex flex-row gap-1">
            <p>Didn't have a Account?</p>
            <a className="text-blue-600 hover:text-sky-400 cursor-pointer">
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
export default Login;
