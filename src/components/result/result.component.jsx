import Button from "../button/button.component";
import {
  updateLockedQuizUser,
  updateFinalResultUser,
  updatePassedQuizUser,
  updatePerformedQuizUser,
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
  performed,
  setPassed,
  restartQuiz,
  setRestartQuiz,
  setEndTime,
  quizLength,
  finalResult,
  isFirstOpen,
  setIsFirstOpen,
  bestTime,
  setPerformed,
  gradeObtained,
  scoreBefore,
  grade,
  setOpen,
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
    setOpen(false);
  };

  const backToPreviousPage = () => {
    navigate("../");
    setRestartQuiz(false);
    setIsFirstOpen(true);
    setOpen(false);
  };

  const againDoQuizHandle = () => {
    setResult(false);
    setCurrentQuestion(0);
    setScore(0);
    setPerformed(false);
    setRestartQuiz(true);
    setIsFirstOpen(true);
    setOpen(true);
  };

  useEffect(() => {
    if (finalScore >= 50 && currentQuizNumber < quizLength - 1) {
      updateLockedQuizUser(
        currentUser?.uid,
        currentClass,
        `Quiz ${currentQuizNumber + 1}`
      );
    }
  }, [finalScore]);

  useEffect(() => {
    if (finalScore <= 100 && !performed) {
      updatePerformedQuizUser(
        currentUser?.uid,
        currentClass,
        `Quiz ${currentQuizNumber}`
      );
    }
  }, [finalScore]);
  useEffect(() => {
    if (finalScore <= 100) {
      updatePassedQuizUser(
        currentUser?.uid,
        currentClass,
        `Quiz ${currentQuizNumber}`
      );
    }
  }, [finalScore]);

  useEffect(() => {
    if (performed && restartQuiz) {
      updateNumbersOfApproachesCurrentUserQuiz(
        currentUser?.uid,
        currentClass,
        summaryQuiz[currentClass].numberOfApproaches
      );
    }
  }, [restartQuiz, performed]);

  useEffect(() => {
    if (!finalResult === 100 || !passed) {
      setEndTime(new Date().getTime() / 1000);
    }
  }, []);

  const min = `${Math.trunc(bestTime / 60)}`.padStart(2, "0");
  const sec = String(bestTime % 60).padStart(2, "0");

  return (
    <>
      {performed && isFirstOpen && finalResult === 100 ? (
        <div className="final-result-box">
          <img src={achivement} alt="puchar" className="img-achivement" />
          <h1 className="quiz-description">Rozwiązałeś poprawnie cały quiz!</h1>
          <p className="quiz-final-result">Ocena: {gradeObtained}</p>

          <div className="result-btn-box">
            <Button onClick={backToPreviousPage}>Powrót</Button>
          </div>
        </div>
      ) : isFirstOpen && performed && finalResult < 100 ? (
        <div className="final-result-box">
          <h1 className="quiz-description">
            Możesz spróbować poprawić swój wynik!
          </h1>
          <p className="quiz-final-result">Uzyskana ocena: {grade}</p>
          <p className="quiz-final-result">Twój wynik: {finalResult}%</p>
          <div className="result-btns-box">
            <Button onClick={againDoQuizHandle}>Popraw</Button>
            <Button onClick={backToPreviousPage}>Powrót</Button>
          </div>
        </div>
      ) : (
        <div className="final-result-box">
          {restartQuiz && !isFirstOpen ? (
            finalScore <= 100 &&
            restartQuiz &&
            !isFirstOpen && (
              <>
                {finalScore < scoreBefore ? (
                  <h1 className="quiz-description">
                    Niestety nie udało Ci się poprawić wyniku
                  </h1>
                ) : (
                  <h1 className="quiz-description">
                    Gratulacje udało Ci się poprawić poprzedni wynik!
                  </h1>
                )}

                <p className="quiz-final-result">
                  Poprzedni wynik: {scoreBefore}%
                </p>
              </>
            )
          ) : !isFirstOpen && finalScore >= 50 ? (
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
          <p className="quiz-final-result">
            Wykorzystany czas: {min}:{sec}
          </p>
          <p className="quiz-final-result">Uzyskana ocena: {gradeObtained}</p>
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
