import React, {  useState } from 'react'
import bgimg from "../assets/bg-ques.svg";
import "./Match.css"
function MatchNumbers() {
    const [colorarr, setColorArr]=useState(["white","white","white","white"]);
    const [color, setColor]=useState("");
    const handleClick=(e)=>{
        setColor(e.target.style.backgroundColor);
    }
    const handleClick2= (e)=>{
        const temp=(e.target.id);
        e.target.style.backgroundColor=color;
        const ind=Number.parseInt(temp.slice(-1));
        let a=colorarr;
        let i=0;
        while (colorarr.includes(color)){
            i=colorarr.indexOf(color);
            a[i]="white";
            i++;
        }
        a[ind-1]=color;
        setColorArr(a);  
        for (let i=0;i<4;i++){
            document.getElementById(`${"Amatch" + (i+1)}`).style.backgroundColor=a[i];
        }
    }
  return (
    <div
      className="container min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white w-7/12 h-5/6 p-12 z-10 ml-36 flex mt-16 rounded-md shadow-custom flex-col">
        <h3 className="text-xl font-mono mb-7">
          <span className="font-bold">Match</span> the following questions:
        </h3>
        <div className='columns'>
            <div className='ques_cols'>
                <p className='questions' id='Qmatch1' style={{backgroundColor:"var(--Yellow-grad-up, #FFB507)"}} onClick={handleClick}>23 + 34</p>
                <p className='questions' id='Qmatch2' style={{backgroundColor:"#A5D720"}} onClick={handleClick}>2 + 54</p>
                <p className='questions' id='Qmatch3' style={{backgroundColor:"#FF6969"}} onClick={handleClick}>9 + 89</p>
                <p className='questions' id='Qmatch4' style={{backgroundColor:"#62D0FF"}} onClick={handleClick}>34 + 94</p>
            </div>
            <div className='ans_cols'>
                <p className='answers' id='Amatch1' onClick={handleClick2} >56</p>
                <p className='answers' id='Amatch2' onClick={handleClick2} >128</p>
                <p className='answers' id='Amatch3' onClick={handleClick2} >57</p>
                <p className='answers' id='Amatch4' onClick={handleClick2} >98</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MatchNumbers
