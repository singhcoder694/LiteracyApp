import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const handleLogin = (path) => {
        navigate(path);
    };

  return (
    <div className='flex flex-row h-screen font-sf-pro-rounded'>
    <div className='flex flex-col gap-y-8  mr-72 ml-40 justify-center backdrop-blur-sm'>
      <h1 className='text-5xl text-custom-red'>Welcome!</h1>
      <p className='text-2xl text-custom-red'>Register</p>
      <div className='flex flex-col gap-4 w-22vw'>
          <h2>Name:</h2>
          <input type='text' placeholder='Place Your Name' className='bg-custom-grey rounded-md p-2 text-center'/>
          <h2>Class:</h2>
          <input type='text' placeholder='Place Your Name' className='bg-custom-grey rounded-md p-2 text-center'  />
          <h2>Age:</h2>
          <input type='text' placeholder='Place Your Name' className='bg-custom-grey rounded-md p-2 text-center'  />
          <button className='bg-custom-red py-2 rounded-md self-center w-full text-white'>
            <div className='flex flex-row justify-center gap-2'>
                <p>
                    Let's Get Started!
                </p>
                <FaArrowRightLong className='text-2xl'/>
            </div>
          </button>
          <div className='flex flex-row'>
                <hr className='w-1/2 self-center'></hr>
                <p className='text-xs'>or</p>
                <hr className='w-1/2 self-center'></hr>
            </div>
          <div className='flex flex-row gap-1'>
              <p>Already have an account?</p>
              <a onClick={()=>
                handleLogin('/login')
            
            } className='text-custom-red hover:text-red-400 cursor-pointer'>Login</a>
          </div>
      </div>
      
    </div>
    
    
    
  </div>
  )
}

export default Register
