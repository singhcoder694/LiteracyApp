import React from 'react'

function SetAvatar() {
  return (
    <div className='flex flex-row h-screen'>
      <div className='flex flex-col gap-y-10  mr-72 ml-40 justify-center text-center'>
        <h1 className='text-custom-red text-6xl'>Select a Avatar</h1>
        <div>
            <h2 className='text-2xl text-custom-red '>This will be your first sticker </h2>
        </div>
        <div className='flex flex-row gap-3'>
            <img src='https://api.multiavatar.com/Gautam.png' alt='Gautam' className='w-32 h-32 rounded-full'/>
            <img src='https://api.multiavatar.com/Shivansh.png' alt='Shiavnsh' className='w-32 h-32 rounded-full'/>
            <img src='https://api.multiavatar.com/Aryan.png' alt='Aryan' className='w-32 h-32 rounded-full'/>
            <img src='https://api.multiavatar.com/Devansh.png' alt='Devansh' className='w-32 h-32 rounded-full'/>
            <img src='https://api.multiavatar.com/Vivek.png' alt='Vivek' className='w-32 h-32 rounded-full'/>
        </div>
        <button className='bg-custom-red py-2 rounded-md'>Select Sticker</button>
      </div>
    </div>
  )
}

export default SetAvatar
