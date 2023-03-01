import { createContext, useState, useEffect } from "react";

import {
  getDataFromUserToCurrentQuiz,
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

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
  const [classCategory, setClassCategory] = useState("Klasa 1 - 3");

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

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    userQuiz,
    setClassCategory,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
