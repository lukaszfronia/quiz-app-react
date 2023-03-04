import { createContext, useState, useEffect } from "react";

import {
  getDataFromUserToCurrentQuiz,
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getDataSummaryForUser,
} from "../utils/firebase/firebase.utils";

export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  userQuiz: null,
  classCategory: null,
  setClassCategory: () => null,
  summaryQuiz: null,
});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userQuiz, setUserQuiz] = useState(null);
  const [classCategory, setClassCategory] = useState("Klasa 1 - 3");
  const [summaryQuiz, setSummaryQuiz] = useState(null);

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
    const getSummaryMap = async () => {
      const summaryMap = await getDataSummaryForUser(currentUser?.uid);
      setSummaryQuiz(summaryMap);
    };
    getSummaryMap();
  }, [currentUser?.uid]);

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
    summaryQuiz,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
