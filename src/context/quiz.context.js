import { createContext, useState, useEffect } from "react";
import { getQuizzesandDocuments } from "../utils/firebase/firebase.utils";

export const QuizContext = createContext({
  quizzes: null,
  collection: "t3s",
  setCollection: () => {},
  quizLocked: true,
  setQuizLocked: () => {},
});

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState(null);
  const [collection, setCollection] = useState("Klasa 1 - 3");
  const [quizLocked, setQuizLocked] = useState(true);

  useEffect(() => {
    const getQuizMap = async () => {
      const quizMap = await getQuizzesandDocuments(collection);
      setQuizzes(quizMap);
    };
    getQuizMap();
  }, [collection]);

  const value = {
    quizzes,
    collection,
    setCollection,
    quizLocked,
    setQuizLocked,
  };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
