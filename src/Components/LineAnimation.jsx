import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const LineAnimation = ({referenceArray, matchedBox}) => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
    const box4Ref = useRef(null);

  const [box1, setBox1] = useState(null);
  const [box2, setBox2] = useState(null);
    const [box3, setBox3] = useState(null);
    const [box4, setBox4] = useState(null);

  useEffect(() => {
    const box1r = box1Ref.current;
    const box2r = box2Ref.current;
    const box3r = box3Ref.current;
    const box4r = box4Ref.current;
    const rect1 = box1r.getBoundingClientRect();
    const rect2 = box2r.getBoundingClientRect();
    const rect3 = box3r.getBoundingClientRect();
    const rect4 = box4r.getBoundingClientRect();
    setBox1(rect1);
    setBox2(rect2);
    setBox3(rect3);
    setBox4(rect4);
    
  }, []);

  
  

  return (
   
      <svg width='100%' height='100%' className="absolute">
        <motion.line
          x1={box1?.x+box1?.width}
          y1={box1?.y+box1?.height/2}
          x2={box2?.x}
          y2={box2?.y + box2?.height/2}
          stroke="black"
          strokeWidth="3"
        
          initial={{ pathLength: 0}}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.line
          x1={box3?.x+box3?.width}
          y1={box3?.y+box3?.height/2}
          x2={box4?.x}
          y2={box4?.y + box4?.height/2}
          stroke="black"
          strokeWidth="3"
          initial={{ pathLength: 0}}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.line
            x1={box1?.x+box1?.width/2}
            y1={box1?.y+box1?.height}
            x2={box3?.x+box3?.width/2}
            y2={box3?.y}
            stroke="black"
            strokeWidth="3"
            initial={{ pathLength: 0}}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
        />
        <motion.line
            x1={box2?.x+box2?.width/2}
            y1={box2?.y+box2?.height}
            x2={box4?.x+box4?.width/2}
            y2={box4?.y}
            stroke="black"
            strokeWidth="3"
            initial={{ pathLength: 0}}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}    
        />
      </svg>
     
  );
};

export default LineAnimation;
