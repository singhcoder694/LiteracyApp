import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';

function Background() {
  const { currentPath, handleNext, handlePrev } = useNavigation();

  const buttonLabels = {
    '/greatestnumber': { prev: null, next: "Next" },
    '/matchthecolumn': { prev: 'Previous', next: 'Next' },
    '/fillintheblanks': { prev: "Previous", next: null },
  };

  const getButtonClassName = (path) => {
    return `w-50 h-16 rounded-tl-3xl rounded-tr-3xl px-6 ${path === currentPath ? 'bg-orange-600' : 'bg-white'}`;
  };

  return (
    <div>
      <div className='flex flex-row justify-between gap-2 h-screen items-end'>
        <div className='flex flex-col gap-2 justify-center my-auto h-1/2 w-24 bg-orange-600 rounded-tr-3xl rounded-br-3xl'>
          {handlePrev && (
            <>
              <p className='text-center font-bold text-3xl' onClick={handlePrev}>{'<'}</p>
              <Link to='/matchthecolumn' className='text-center' onClick={handlePrev}>Previous</Link>
            </>
          )}
        </div>

        <div className='flex flex-row gap-2'>
            <Link to="/greatestnumber" className={getButtonClassName('/greatestnumber')}>Greatest Number</Link>
          <Link to='/matchthecolumn' className={getButtonClassName('/matchthecolumn')}>Match The Column</Link>
          <Link to='/fillintheblanks' className={getButtonClassName('/fillintheblanks')}>Fill in the Blanks</Link>
          <button className='w-50 h-16 rounded-tl-3xl rounded-tr-3xl px-16 bg-orange-600 text-xl font-semibold'>Submit</button>
        </div>
        <div className='flex flex-col gap-2 justify-center my-auto h-1/2 w-24 bg-orange-600 rounded-tl-3xl rounded-bl-3xl'>
          {handleNext && (
            <>
              <p className='text-center font-bold text-3xl' onClick={handleNext}>{'>'}</p>
              <Link to='/fillintheblanks' className='text-center' onClick={handleNext}>Next</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Background;
