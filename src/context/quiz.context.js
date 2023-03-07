import { createContext, useState, useEffect } from "react";
import { getAllQuizzesWithItems } from "../utils/firebase/firebase.utils";

export const QuizContext = createContext({
  quizzes: {},
  collection: "t3s",
  setCollection: () => {},
  quizLocked: true,
  setQuizLocked: () => {},
});

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState({});
  const [collection, setCollection] = useState("Klasa 1 - 3");
  const [quizLocked, setQuizLocked] = useState(true);

  useEffect(() => {
    getAllQuizzesWithItems(collection, setQuizzes);
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
