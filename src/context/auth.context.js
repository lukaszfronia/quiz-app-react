import { createContext, useState, useEffect } from "react";

import { getDataFromUserToCurrentQuiz } from "../utils/firebase/firebase.utils";

export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  userQuiz: null,
  classCategory: null,
  setClassCategory: () => null,
});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userQuiz, setUserQuiz] = useState(null);
  const [classCategory, setClassCategory] = useState(null);

  useEffect(() => {
    const getQuizMap = async () => {
      const quizMap = await getDataFromUserToCurrentQuiz(
        currentUser?.uid,
        classCategory
      );
      setUserQuiz(quizMap);
    };
    getQuizMap();
  }, [currentUser?.uid, classCategory]);
  console.log(userQuiz);

  const value = { currentUser, setCurrentUser, userQuiz, setClassCategory };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
