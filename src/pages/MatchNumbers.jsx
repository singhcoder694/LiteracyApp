import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import bgimg from "../assets/bg-ques.svg";
import "./Match.css";

import { motion } from "framer-motion";

function MatchNumbers() {
  const [colorarr, setColorArr] = useState([
    "white",
    "white",
    "white",
    "white",
  ]);
  const numPairs = 4;
  const [color, setColor] = useState("");

  const qboxRefs = useRef([]);
  const aboxRefs = useRef([]);

  const [boxArray, setBoxArray] = useState([null, null, null, null]);

  const [aboxArray, setAboxArray] = useState([null, null, null, null]);

  const [matched, setMatched] = useState([]);
  const [quesSelected,setQuesSelected] = useState(false);
  const [pairs,setPairs] = useState([[-1,-1],[-1,-1],[-1,-1],[-1,-1]]);

  const [animationKey, setAnimationKey] = useState([0,0,0,0]);
  const [animationLoaded, setAnimationLoaded] = useState([
    false,
    false,
    false,
    false,
  ]);

  const backColorArr = [
    "var(--Yellow-grad-up, #FFB507)",
    "#A5D720",
    "#FF6969",
    "#62D0FF",
  ];

  const getQBoxRef = (index) => {
    if (!qboxRefs.current[index]) {
      qboxRefs.current[index] = React.createRef();
    }
    return qboxRefs.current[index];
  };

  const getABoxRef = (index) => {
    if (!aboxRefs.current[index]) {
      aboxRefs.current[index] = React.createRef();
    }
    return aboxRefs.current[index];
  };

  useLayoutEffect(() => {
    //console.log(qboxRefs.current);

   // console.log(qboxRefs.current[0].current.getBoundingClientRect());
    setBoxArray(
      qboxRefs.current.map((ref) => ref.current.getBoundingClientRect())
    );
    setAboxArray(
      aboxRefs.current.map((ref) => ref.current.getBoundingClientRect())
    );
  }, []);

  const [ansboxArray, setAnsboxArray] = useState([null, null, null, null]);

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      if (matched[0] == i + 1) {
        for (let j = 0; j < 4; j++) {
          if (matched[1] == j + 1) {
            setAnsboxArray((prevState) => {
              let newState = [...prevState];
              newState[i] = aboxArray[j];
              return newState;
            });
          }
        }
      }
    }
  }, [matched]);

  const handleClick = (e) => {
    const temp = e.target.id;
    const ind = Number.parseInt(temp.slice(-1));
    if (
      document.getElementById(`${"Qmatch" + ind}`).style.backgroundColor === ""
    ) {
      document.getElementById(`${"Qmatch" + ind}`).style.backgroundColor =
        backColorArr[ind - 1];
      let newmatched = [...matched];
      newmatched[0] = ind;
      newmatched[1] = null;
      setMatched(newmatched);
      setAnimationKey((prevKey) => {
        let newState = [...prevKey];
        newState[ind - 1]++;
        return newState;
      });
      
    } else {
      document.getElementById(`${"Qmatch" + ind}`).style.backgroundColor = "";
    }
    setColor(backColorArr[ind - 1]);
  };
  const handleClick2 = (e) => {
    const temp = e.target.id;
    e.target.style.backgroundColor = color;
    const ind = Number.parseInt(temp.slice(-1));
    let newmatched = [...matched];
    newmatched[1] = ind;
    setMatched(newmatched);
    setAnimationKey((prevKey) => {
      let newState = [...prevKey];
      newState[0]++;
      return newState;
    });

    let a = colorarr;
    let i = 0;
    while (colorarr.includes(color)) {
      i = colorarr.indexOf(color);
      a[i] = "white";
      i++;
    }
    a[ind - 1] = color;
    setColorArr(a);
    for (let i = 0; i < 4; i++) {
      document.getElementById(`${"Amatch" + (i + 1)}`).style.backgroundColor =
        a[i];
    }
  };

  console.log(animationKey);

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
        <div className="columns">
          <div className="ques_cols">
            <p
              className="questions"
              id="Qmatch1"
              ref={getQBoxRef(0)}
              onClick={handleClick}
            >
              23 + 34
            </p>
            <p
              className="questions"
              id="Qmatch2"
              ref={getQBoxRef(1)}
              onClick={handleClick}
            >
              2 + 54
            </p>
            <p
              className="questions"
              id="Qmatch3"
              ref={getQBoxRef(2)}
              onClick={handleClick}
            >
              9 + 89
            </p>
            <p
              className="questions"
              id="Qmatch4"
              ref={getQBoxRef(3)}
              onClick={handleClick}
            >
              34 + 94
            </p>
          </div>
          <div className="ans_cols">
            <p
              className="answers"
              id="Amatch1"
              ref={getABoxRef(0)}
              onClick={handleClick2}
            >
              56
            </p>
            <p
              className="answers"
              id="Amatch2"
              ref={getABoxRef(1)}
              onClick={handleClick2}
            >
              128
            </p>
            <p
              className="answers"
              id="Amatch3"
              ref={getABoxRef(2)}
              onClick={handleClick2}
            >
              57
            </p>
            <p
              className="answers"
              id="Amatch4"
              ref={getABoxRef(3)}
              onClick={handleClick2}
            >
              98
            </p>
          </div>
        </div>
      </div>
      <svg
        width="100%"
        height="100%"
        className="absolute z-10 pointer-events-none"
      >
        {boxArray.map(
          (box, index) => (
    
            (
              animationKey[index] !== 0 &&
              <motion.line
                key={`line-${index}-${animationKey[index]}`}
                x1={box?.x + box?.width}
                y1={box?.y + box?.height / 2}
                x2={
                  ansboxArray[index] == null
                    ? box?.x + box?.width
                    : ansboxArray[index]?.x
                }
                y2={
                  ansboxArray[index] == null
                    ? box?.y + box?.height / 2
                    : ansboxArray[index]?.y + ansboxArray[index]?.height / 2
                }
                stroke="black"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
            )
          )
        )}
      </svg>
    </div>
  );
}

export default MatchNumbers;
