import { createContext, useContext, useState } from 'react';

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questionStatus, setQuestionStatus] = useState([false,false,false,false,false,false,false,false,false]);

  const updateQuestionStatus = (questionIndex, isDone) => {
    setQuestionStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[questionIndex] = isDone;
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
