import Button from "../button/button.component";
import {
  updateLockedQuizUser,
  updateFinalResultUser,
  updatePassedQuizUser,
  updateCountPassedCurrentUserQuiz,
  updateCountPassedAllQuizzes,
  updateNumbersOfApproachesCurrentUserQuiz,
  updadateCurrentQuestionHintAll,
} from "../../utils/firebase/firebase.utils";
import { AuthContext } from "../../context/auth.context";

import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

import achivement from "./achievement-g9826017dd_1280.png";
import "./result.styles.css";

const Result = ({
  finalScore,
  setResult,
  setCurrentQuestion,
  setScore,
  currentQuizNumber,
  currentClass,
  passed,
  setPassed,
  restartQuiz,
  setRestartQuiz,
  setEndTime,
  quizLength,
  finalResult,
  isFirstOpen,
  setIsFirstOpen,
}) => {
  const {
    currentUser,
    quizInformationFromCurrentUser,
    summaryQuiz,
    userGeneralStatistics,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const closeQuizHandle = () => {
    navigate("../");
    // navigate(0);
    setRestartQuiz(false);
    setIsFirstOpen(true);
  };

  const backToPreviousPage = () => {
    navigate("../");
    setRestartQuiz(false);
    setIsFirstOpen(true);
  };

  const againDoQuizHandle = () => {
    setResult(false);
    setCurrentQuestion(0);
    setScore(0);
    setPassed(false);
    setRestartQuiz(true);
    setIsFirstOpen(true);
  };

  useEffect(() => {
    if (finalScore >= 50) {
      updateLockedQuizUser(
        currentUser.uid,
        currentClass,
        `Quiz ${currentQuizNumber + 1}`
      );
    }
  }, []);

  useEffect(() => {
    if (finalScore > finalResult) {
      updateFinalResultUser(
        currentUser.uid,
        currentClass,
        `Quiz ${currentQuizNumber}`,
        finalScore
      );
    }
  }, [finalScore]);

  useEffect(() => {
    if (finalScore <= 100 && !passed) {
      updatePassedQuizUser(
        currentUser.uid,
        currentClass,
        `Quiz ${currentQuizNumber}`
      );
    }
  }, []);

  useEffect(() => {
    if (passed & restartQuiz) {
      updateNumbersOfApproachesCurrentUserQuiz(
        currentUser.uid,
        currentClass,
        summaryQuiz[currentClass].numberOfApproaches
      );
    }
  }, [restartQuiz, passed]);

  useEffect(() => {
    if (!finalResult === 100 || !passed) {
      setEndTime(new Date().getTime() / 1000);
    }
  }, []);

  return (
    <>
      {passed & isFirstOpen & (finalResult === 100) ? (
        <div className="final-result-box">
          <img src={achivement} alt="puchar" className="img-achivement" />
          <h1 className="quiz-description">Rozwiązałeś poprawnie cały quiz!</h1>
          <p className="quiz-final-result">Twój wynik: {finalResult}%</p>
          <div className="result-btn-box">
            <Button onClick={backToPreviousPage}>Powrót</Button>
          </div>
        </div>
      ) : isFirstOpen & passed & (finalResult < 100) ? (
        <div className="final-result-box">
          <h1 className="quiz-description">
            Możesz spróbować poprawić swój wynik!
          </h1>
          <p className="quiz-final-result">Twój wynik: {finalResult}%</p>
          <div className="result-btns-box">
            <Button onClick={againDoQuizHandle}>Popraw</Button>
            <Button onClick={backToPreviousPage}>Powrót</Button>
          </div>
        </div>
      ) : (
        <div className="final-result-box">
          {restartQuiz & !isFirstOpen ? (
            (finalScore <= 100) & restartQuiz & !isFirstOpen && (
              <>
                {finalScore < finalResult ? (
                  <h1 className="quiz-description">
                    Niestety nie udało Ci się poprawić wyniku
                  </h1>
                ) : (
                  <h1 className="quiz-description">
                    Gratulacje udało Ci się poprawić poprzedni wynik!
                  </h1>
                )}
                <p className="quiz-final-result">
                  Aktualny wynik: {finalResult}%
                </p>
              </>
            )
          ) : !isFirstOpen & (finalScore >= 50) ? (
            <>
              <h1 className="quiz-description">Rozwiązałeś poprawnie quiz</h1>
              <h2>
                {currentQuizNumber < quizLength - 1
                  ? "Gratulacje udało Ci się odblokować kolejny quiz!"
                  : ""}
              </h2>
            </>
          ) : (
            <h1 className="quiz-description">
              Niestety nie udało Ci się rozwiązać quizu
            </h1>
          )}

          <p className="quiz-final-result">Twój wynik: {finalScore}%</p>
          <div
            className={`
                   "result-btn-box"
                }`}
          >
            <Button onClick={closeQuizHandle}>Zakończ</Button>
          </div>
        </div>
      )}
    </>
  );
};
export default Result;
