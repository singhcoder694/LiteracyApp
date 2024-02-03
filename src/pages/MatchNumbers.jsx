import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
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
  const [quesSelected, setQuesSelected] = useState(false);
  const [ansSelected, setAnsSelected] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [pairs, setPairs] = useState([
    [1, -1],
    [2, -1],
    [3, -1],
    [4, -1],
  ]);

  const [animationKey, setAnimationKey] = useState([0, 0, 0, 0]);
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
    let f = 0;
    pairs.map((pair, index) => {
      if (pair[0] == ind && pair[1] != -1) {
        f = 1;
      }
    });
    if (f == 1) {
      return;
    }
    if (
      quesSelected == false ||
      (quesSelected == true && ansSelected == true)
    ) {
      if (quesSelected == true && ansSelected == true) {
        setQuesSelected(false);
        setAnsSelected(false);
      }
      e.target.style.backgroundColor = backColorArr[ind - 1];
      setColor(backColorArr[ind - 1]);
      setQuesSelected(true);
      let newmatched = [...matched];
      newmatched[0] = ind;
      newmatched[1] = null;
      setMatched(newmatched);
    } else if (quesSelected == true && ansSelected == false) {
      if (ind == matched[0]) {
        e.target.style.backgroundColor = "";
        setQuesSelected(false);
        setAnsSelected(false);
        let newmatched = [...matched];
        newmatched[0] = null;
        newmatched[1] = null;
        setMatched(newmatched);
        return;
      }

      for (let i = 0; i < 4; i++) {
        if (i == ind - 1) {
          document.getElementById(`${"Qmatch" + ind}`).style.backgroundColor =
            backColorArr[ind - 1];
          setColor(backColorArr[ind - 1]);
          let newmatched = [...matched];
          newmatched[0] = ind;
          setMatched(newmatched);
        } else {
          if (pairs[i][1] == -1)
            document.getElementById(
              `${"Qmatch" + (i + 1)}`
            ).style.backgroundColor = "";
        }
      }
    }
  };
  const handleClick2 = (e) => {
    console.log(quesSelected, ansSelected, matched);
    if (quesSelected == false) return;
    const temp = e.target.id;
    const ind = Number.parseInt(temp.slice(-1));
    if (quesSelected == true && ansSelected == false) {
      for (let i = 0; i < 4; i++) {
        if (pairs[i][1] == ind) {
          return;
        }
      }

      document.getElementById(`${"Amatch" + ind}`).style.backgroundColor =
        color;
      let newmatched = [...matched];
      newmatched[1] = ind;
      setMatched(newmatched);
      setAnsSelected(true);
      setPairs((prev) => {
        let newState = [...prev];
        newState[matched[0] - 1][1] = ind;
        setAnimationKey((prev) => {
          let newState = [...prev];
          newState[matched[0] - 1] = newState[matched[0] - 1] + 1;
          return newState;
        });
        return newState;
      });
    } else if (quesSelected == true && ansSelected == true) {
      if (matched[1] == ind) {
        document.getElementById(`${"Amatch" + ind}`).style.backgroundColor = "";
        document.getElementById(
          `${"Qmatch" + matched[0]}`
        ).style.backgroundColor = "";
        let temp = matched[0];
        let newmatched = [...matched];
        newmatched[0] = null;
        newmatched[1] = null;
        setMatched(newmatched);

        let newPairs = [...pairs];
        newPairs[temp - 1][1] = -1;
        setPairs(newPairs);
        setAnsboxArray((prev) => {
          let newState = [...prev];
          newState[temp - 1] = null;
          return newState;
        });
        setAnimationKey((prev) => {
          let newState = [...prev];
          newState[temp - 1] = newState[temp - 1] + 1;
          return newState;
        });
        //setQuesSelected(false);
        //setAnsSelected(false);
        let f = 0;
        pairs.map((pair, index) => {
          if (pair[1] !== -1) {
            f = 1;
            let newmatched = [...matched];
            newmatched[0] = pair[0];
            newmatched[1] = pair[1];
            setMatched(newmatched);
            setColor(backColorArr[pair[0] - 1]);
          }
        });
        if (f == 0) {
          let newmatched = [...matched];
          newmatched[0] = null;
          newmatched[1] = null;
          setMatched(newmatched);
          setQuesSelected(false);
          setAnsSelected(false);
        }

        return;
      }
      let f = 0;
      for (let i = 0; i < 4; i++) {
        if (pairs[i][1] == ind) {
          document.getElementById(`${"Amatch" + ind}`).style.backgroundColor =
            "";

          document.getElementById(
            `${"Qmatch" + (i + 1)}`
          ).style.backgroundColor = "";

          /* let newmatched = [...matched];
          newmatched[0] = null;
          newmatched[1] = null;
          setMatched(newmatched);*/
          const newPairs = [...pairs];
          newPairs[i][1] = -1;
          setPairs(newPairs);
          setAnsboxArray((prev) => {
            let newState = [...prev];
            newState[i] = null;
            return newState;
          });
          setAnimationKey((prev) => {
            let newState = [...prev];
            newState[i] = newState[i] + 1;
            return newState;
          });
          // setQuesSelected(false);
          //setAnsSelected(false);
          return;
        }
      }
      document.getElementById(
        `${"Amatch" + matched[1]}`
      ).style.backgroundColor = "";
      document.getElementById(`${"Amatch" + ind}`).style.backgroundColor =
        color;
      let newmatched = [...matched];
      newmatched[1] = ind;
      setMatched(newmatched);
      setPairs((prev) => {
        let newState = [...prev];
        newState[matched[0] - 1][1] = ind;
        return newState;
      });
      setAnsboxArray((prev) => {
        let newState = [...prev];
        newState[matched[0] - 1] = aboxArray[ind - 1];
        return newState;
      });
      setAnimationKey((prev) => {
        let newState = [...prev];
        newState[matched[0] - 1] = newState[matched[0] - 1] + 1;
        return newState;
      });
    }
  };

  //console.log(matched);

  return (
    <div className="smallest_number_container">
      {/* <div className="bg-white w-7/12 h-5/6 p-12 z-10 ml-36 flex mt-16 rounded-md shadow-custom flex-col">
        <h3 className="text-xl font-mono mb-7">
          <span className="font-bold">Match</span> the following questions:
        </h3> */}
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
        {/* </div> */}
      </div>
      <svg
        width="100%"
        height="100%"
        className="absolute z-10 pointer-events-none"
      >
        {boxArray.map((box, index) => (
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
        ))}
      </svg>
    </div>
  );
}

export default MatchNumbers;
