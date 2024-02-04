import { createContext, useContext, useState } from 'react';

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questionStatus, setQuestionStatus] = useState({
    1: [false,null, 24],
    2: [false,null, 13],
    3: [false,null, "real_answer", 3],
    4: [false,null, "real_answer", 1],
    5: [false,null, "real_answer", 4],
    6: [false,null, "real_answer", 2],
    7: [false,"", 95],
    8: [false,"", 133],
    9: [false,"", 141],
    10: [false,"", 59],
  });
  const updateQuestionStatus = (questionIndex, isDone, user_answer, real_anwer) => {
    setQuestionStatus((prevStatus) => {
      const newStatus = {...prevStatus};
      newStatus[questionIndex][0] = isDone;
      newStatus[questionIndex][1] = user_answer;
      newStatus[questionIndex][2] = questionStatus[questionIndex][2];
      newStatus[questionIndex][3] = questionStatus[questionIndex][3];
      return newStatus;
    });
  };

  return (
    <QuestionContext.Provider value={{ questionStatus, updateQuestionStatus }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => {
  return useContext(QuestionContext);
};
