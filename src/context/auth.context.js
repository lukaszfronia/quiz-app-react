import { createContext, useState, useEffect } from "react";
import { generalStats } from "../generalStatistic";

import {
  getQuizzesInformationForAllUser,
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getDataSummaryForUser,
  getAllUsers,
  getGeneralStatsForAllUsers,
  getGeneralStatsForCurrentUser,
} from "../utils/firebase/firebase.utils";

export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  quizInformationFromCurrentUser: null,
  classCategory: null,
  setClassCategory: () => null,
  summaryQuiz: null,
  allUserUid: null,
  generalStatistics: [],
  userGeneralStatistics: null,
});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [quizInformationFromCurrentUser, setQuizInformationFromCurrentUser] =
    useState(null);
  const [classCategory, setClassCategory] = useState("Klasa 1 - 3");
  const [summaryQuiz, setSummaryQuiz] = useState(null);
  const [allUserUid, setAllUserUid] = useState([]);
  const [generalStatistics, setGeneralStatistics] = useState([]);
  const [userGeneralStatistics, setUserGeneralStatistics] = useState(null);
  const [uid, setUid] = useState([]);
  useEffect(() => {
    getQuizzesInformationForAllUser(
      currentUser?.uid,
      classCategory,
      setQuizInformationFromCurrentUser
    );
  }, [currentUser?.uid, classCategory]);

  useEffect(() => {
    getDataSummaryForUser(currentUser?.uid, setSummaryQuiz);
  }, [currentUser?.uid]);

  useEffect(() => {
    getAllUsers(setAllUserUid);
  }, []);

  useEffect(() => {
    allUserUid.forEach((id) => {
      const { uid } = id;
      setUid((prev) => [...prev, uid]);
    });
  }, [allUserUid]);

  useEffect(() => {
    getGeneralStatsForAllUsers(setGeneralStatistics);
  }, []);

  useEffect(() => {
    getGeneralStatsForCurrentUser(currentUser?.uid, setUserGeneralStatistics);
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
  useEffect(() => {
    const sortedStatics = generalStatistics?.sort(
      (a, b) => b[0]?.passedAllQuizzes - a[0]?.passedAllQuizzes
    );
    setGeneralStatistics(sortedStatics);
  }, [generalStatistics]);

  const value = {
    currentUser,
    setCurrentUser,
    quizInformationFromCurrentUser,
    setClassCategory,
    summaryQuiz,
    allUserUid,
    generalStatistics,
    userGeneralStatistics,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
