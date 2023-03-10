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
  getCurrentQuizshowHint,
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
  dataKlasa13: null,
  dataKlasa48: null,
  dataTL: null,
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
  const [dataKlasa13, setDataKlasa13] = useState(null);
  const [dataKlasa48, setDataKlasa48] = useState(null);
  const [dataTL, setDataTL] = useState(null);

  useEffect(() => {
    getQuizzesInformationForAllUser(
      currentUser?.uid,
      classCategory,
      setQuizInformationFromCurrentUser
    );
  }, [currentUser?.uid, classCategory]);

  useEffect(() => {
    getQuizzesInformationForAllUser(
      currentUser?.uid,
      "Klasa 1 - 3",
      setDataKlasa13
    );
    getQuizzesInformationForAllUser(
      currentUser?.uid,
      "Klasa 4 - 8",
      setDataKlasa48
    );
    getQuizzesInformationForAllUser(
      currentUser?.uid,
      "Tech - Liceum",
      setDataTL
    );
  }, [currentUser?.uid, classCategory]);

  useEffect(() => {
    getDataSummaryForUser(currentUser?.uid, setSummaryQuiz);
  }, [currentUser?.uid]);

  useEffect(() => {
    getAllUsers(setAllUserUid);
  }, []);

  useEffect(() => {
    allUserUid.map((id) => {
      setAllUserUid((prev) => [...prev, id]);
    });
  }, []);

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
      (a, b) => b?.passedAllQuizzes - a?.passedAllQuizzes
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
    dataKlasa13,
    dataKlasa48,
    dataTL,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
