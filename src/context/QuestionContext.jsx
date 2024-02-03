import { createContext, useContext, useState } from 'react';

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questionStatus, setQuestionStatus] = useState({
    1: [false,"user_answer", "real_answer"],
    2: [false,"user_answer", "real_answer"],
    3: [false,"user_answer", "real_answer"],
    4: [false,"user_answer", "real_answer"],
    5: [false,"user_answer", "real_answer"],
    6: [false,"user_answer", "real_answer"],
    7: [false,"", "real_answer"],
    8: [false,"", "real_answer"],
    9: [false,"", "real_answer"],
    10: [false,"", "real_answer"]
  });
  // const arr={
  //   1: [false,"user_answer", "real_answer"],
  //   2: [false,"user_answer", "real_answer"],
  //   3: [false,"user_answer", "real_answer"],
  //   4: [false,"user_answer", "real_answer"],
  //   5: [false,"user_answer", "real_answer"],
  //   6: [false,"user_answer", "real_answer"],
  //   7: [false,"user_answer", "real_answer"],
  //   8: [false,"user_answer", "real_answer"],
  //   9: [false,"user_answer", "real_answer"],
  //   10: [false,"user_answer", "real_answer"],
  // }
  const updateQuestionStatus = (questionIndex, isDone, user_answer, real_anwer) => {
    setQuestionStatus((prevStatus) => {
      const newStatus = {...prevStatus};
      newStatus[questionIndex][0] = isDone;
      newStatus[questionIndex][1] = user_answer;
      newStatus[questionIndex][2] = real_anwer;
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
