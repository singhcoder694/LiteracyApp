import React, { useState, useRef, useEffect } from "react";
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
  const [color, setColor] = useState("");
  const qbox1Ref = useRef(null);
  const qbox2Ref = useRef(null);
  const qbox3Ref = useRef(null);
  const qbox4Ref = useRef(null);
  const abox1Ref = useRef(null);
  const abox2Ref = useRef(null);
  const abox3Ref = useRef(null);
  const abox4Ref = useRef(null);
  const [box1, setBox1] = useState(null);
  const [box2, setBox2] = useState(null);
  const [box3, setBox3] = useState(null);
  const [box4, setBox4] = useState(null);
  const [abox1, setAbox1] = useState(null);
  const [abox2, setAbox2] = useState(null);
  const [abox3, setAbox3] = useState(null);
  const [abox4, setAbox4] = useState(null);
  const [matched, setMatched] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [animationLoaded, setAnimationLoaded] = useState([false, false, false, false]);

  const backColorArr = [
    "var(--Yellow-grad-up, #FFB507)",
    "#A5D720",
    "#FF6969",
    "#62D0FF",
  ];

  useEffect(() => {
    const box1r = qbox1Ref.current;
    const box2r = qbox2Ref.current;
    const box3r = qbox3Ref.current;
    const box4r = qbox4Ref.current;
    //console.log(box1r, box2r, box3r, box4r);
    const rect1 = box1r.getBoundingClientRect();
    const rect2 = box2r.getBoundingClientRect();
    const rect3 = box3r.getBoundingClientRect();
    const rect4 = box4r.getBoundingClientRect();
    const rect5 = abox1Ref.current.getBoundingClientRect();
    const rect6 = abox2Ref.current.getBoundingClientRect();
    const rect7 = abox3Ref.current.getBoundingClientRect();
    const rect8 = abox4Ref.current.getBoundingClientRect();
    //console.log(rect1, rect2, rect3, rect4, rect5, rect6, rect7, rect8);
    setAbox1(rect5);
    setAbox2(rect6);
    setAbox3(rect7);
    setAbox4(rect8);
    setBox1(rect1);
    setBox2(rect2);
    setBox3(rect3);
    setBox4(rect4);
    setLoaded(true);
  }, []);

  const [ansbox1, setAnsbox1] = useState(box1);
  const [ansbox2, setAnsbox2] = useState(box2);
  const [ansbox3, setAnsbox3] = useState(box3);
  const [ansbox4, setAnsbox4] = useState(box4);

  useEffect(() => {
    if (matched[0] === 1) {
      if (matched[1] === 1) {
        setAnsbox1(abox1);
      } else if (matched[1] === 2) {
        setAnsbox1(abox2);
      } else if (matched[1] === 3) {
        setAnsbox1(abox3);
      } else if (matched[1] === 4) {
        setAnsbox1(abox4);
      }
    } else if (matched[0] === 2) {
      if (matched[1] === 1) {
        setAnsbox2(abox1);
      } else if (matched[1] === 2) {
        setAnsbox2(abox2);
      } else if (matched[1] === 3) {
        setAnsbox2(abox3);
      } else if (matched[1] === 4) {
        setAnsbox2(abox4);
      }
    } else if (matched[0] === 3) {
      if (matched[1] === 1) {
        setAnsbox3(abox1);
      } else if (matched[1] === 2) {
        setAnsbox3(abox2);
      } else if (matched[1] === 3) {
        setAnsbox3(abox3);
      } else if (matched[1] === 4) {
        setAnsbox3(abox4);
      }
    } else if (matched[0] === 4) {
      if (matched[1] === 1) {
        setAnsbox4(abox1);
      } else if (matched[1] === 2) {
        setAnsbox4(abox2);
      } else if (matched[1] === 3) {
        setAnsbox4(abox3);
      } else if (matched[1] === 4) {
        setAnsbox4(abox4);
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
    setAnimationKey(prevKey => prevKey + 1);
    setAnimationLoaded(prevState => {
      let newState = [...prevState];
      newState[ind - 1] = true;
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
  console.log(ansbox1, ansbox2, ansbox3, ansbox4,animationKey);
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
              ref={qbox1Ref}
              onClick={handleClick}
            >
              23 + 34
            </p>
            <p
              className="questions"
              id="Qmatch2"
              ref={qbox2Ref}
              onClick={handleClick}
            >
              2 + 54
            </p>
            <p
              className="questions"
              id="Qmatch3"
              ref={qbox3Ref}
              onClick={handleClick}
            >
              9 + 89
            </p>
            <p
              className="questions"
              id="Qmatch4"
              ref={qbox4Ref}
              onClick={handleClick}
            >
              34 + 94
            </p>
          </div>
          <div className="ans_cols">
            <p
              className="answers"
              id="Amatch1"
              ref={abox1Ref}
              onClick={handleClick2}
            >
              56
            </p>
            <p
              className="answers"
              id="Amatch2"
              ref={abox2Ref}
              onClick={handleClick2}
            >
              128
            </p>
            <p
              className="answers"
              id="Amatch3"
              ref={abox3Ref}
              onClick={handleClick2}
            >
              57
            </p>
            <p
              className="answers"
              id="Amatch4"
              ref={abox4Ref}
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
        <motion.line
           key={`line1-${animationKey}`} 
           
          x1={box1?.x + box1?.width}
          y1={box1?.y + box1?.height / 2}
          x2={ansbox1 == null ? box1?.x + box1?.width : ansbox1?.x}
          y2={
            ansbox1 == null
              ? box1?.y + box1?.height / 2
              : ansbox1?.y + ansbox1?.height / 2
          }
          stroke="black"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.line
        key={`line3-${animationKey}`}
          x1={box3?.x + box3?.width}
          y1={box3?.y + box3?.height / 2}
          x2={ansbox3 == null ? box3?.x + box3?.width : ansbox3?.x}
          y2={
            ansbox3 == null
              ? box3?.y + box3?.height / 2
              : ansbox3?.y + ansbox3?.height / 2
          }
          stroke="black"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.line
        key={`line4-${animationKey}`}
          x1={box4?.x + box4?.width}
          y1={box4?.y + box4?.height / 2}
          x2={ansbox4 == null ? box4?.x + box4?.width : ansbox4?.x}
          y2={
            ansbox4 == null
              ? box4?.y + box4?.height / 2
              : ansbox4?.y + ansbox4?.height / 2
          }
          stroke="black"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1}}
        />
        <motion.line
        key={`line2-${animationKey}`}
          x1={box2?.x + box2?.width}
          y1={box2?.y + box2?.height / 2}
          x2={ansbox2 == null ? box2?.x + box2?.width : ansbox2?.x}
          y2={
            ansbox2 == null
              ? box2?.y + box2?.height / 2
              : ansbox2?.y + ansbox2?.height / 2
          }
          stroke="black"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1}}
        />
      </svg>
    </div>
  );
}

export default MatchNumbers;
