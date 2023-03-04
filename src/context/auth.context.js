import { createContext, useState, useEffect } from "react";
import { generalStats } from "../generalStatistic";

import {
  getDataFromUserToCurrentQuiz,
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getDataSummaryForUser,
  getAllUsers,
  getGeneralStatsFromCurrentUser,
} from "../utils/firebase/firebase.utils";

export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  userQuiz: null,
  classCategory: null,
  setClassCategory: () => null,
  summaryQuiz: null,
  allUserUid: null,
  generalStatistics: [],
  userGeneralStatistics: null,
});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userQuiz, setUserQuiz] = useState(null);
  const [classCategory, setClassCategory] = useState("Klasa 1 - 3");
  const [summaryQuiz, setSummaryQuiz] = useState(null);
  const [allUserUid, setAllUserUid] = useState(null);
  const [generalStatistics, setGeneralStatistics] = useState([]);
  const [userGeneralStatistics, setUserGeneralStatistics] = useState(null);

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
    const getAllUsersUid = async () => {
      const usersMap = await getAllUsers();
      setAllUserUid(usersMap);
    };
    getAllUsersUid();
  }, []);

  useEffect(() => {
    allUserUid?.forEach((uid) => {
      const getGeneralStats = async (uid) => {
        const statsMap = await getGeneralStatsFromCurrentUser(uid);
        setGeneralStatistics((oldArray) => [...oldArray, statsMap]);
      };
      getGeneralStats(uid);
    });
  }, [allUserUid]);

  useEffect(() => {
    const getGeneralStats = async () => {
      const statsMap = await getGeneralStatsFromCurrentUser(currentUser?.uid);
      setUserGeneralStatistics(statsMap);
    };
    getGeneralStats();
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
    const sortedStatics = generalStatistics.sort(
      (a, b) => b[0].passedAllQuizzes - a[0].passedAllQuizzes
    );
    setGeneralStatistics(sortedStatics);
  }, [generalStatistics]);

  const value = {
    currentUser,
    setCurrentUser,
    userQuiz,
    setClassCategory,
    summaryQuiz,
    allUserUid,
    generalStatistics,
    userGeneralStatistics,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
