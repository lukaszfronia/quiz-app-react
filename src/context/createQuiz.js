import { createContext, useState, useEffect } from "react";
import {
  getCreatedQuizzes,
  getCreatedQuizzesToDisplay,
} from "../utils/firebase/firebase.utils";

export const CreateQuizContext = createContext({
  createdQuizzes: null,
  createdQuizzesToDisplay: null,
});

export const CreateQuizProvider = ({ children }) => {
  const [createdQuizzes, setCreatedQuizzes] = useState([]);
  const [createdQuizzesToDisplay, setCreatedQuizzesToDisplay] = useState(null);

  useEffect(() => {
    getCreatedQuizzes(setCreatedQuizzes);
  }, []);
  useEffect(() => {
    getCreatedQuizzesToDisplay(setCreatedQuizzesToDisplay);
  }, []);

  const value = { createdQuizzes, createdQuizzesToDisplay };
  return (
    <CreateQuizContext.Provider value={value}>
      {children}
    </CreateQuizContext.Provider>
  );
};
