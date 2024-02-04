import React, { useEffect} from 'react'
import "./modals.css"
import { Link, Navigate } from 'react-router-dom';
function Answer(props) {
    const {closeModal}= props;
    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return ()=>{
            document.body.style.overflowY="scroll";
        }
    })
  return (
    <div>
        <>
        <div className='modal_background'>
            <div className="modal">
                <p className='head'>Are you sure you want to submit?<br></br>
You want be able to come back to the test.</p>
                <div className='button_container'>
                    <button className='back_to_test' onClick={closeModal}>Back to Test</button>
                    <Link to="/dashboard" className='submit_test'><button onClick={closeModal}>Submit</button></Link>
                </div>
            </div>
        </div>

    </>
    </div>
  )
}

export default Answer
