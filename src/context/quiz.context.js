import { createContext, useState, useEffect } from "react";
import { getQuizzesandDocuments } from "../utils/firebase/firebase.utils";

export const QuizContext = createContext({
  quizzes: {},
  collection: "t3s",
  setCollection: () => {},
});

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState({});
  const [collection, setCollection] = useState("t3s");

  useEffect(() => {
    const getQuizMap = async () => {
      const quizMap = await getQuizzesandDocuments(collection);
      setQuizzes(quizMap);
    };
    getQuizMap();
  }, [collection]);

  const value = { quizzes, collection, setCollection };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
