import Button from "../button/button.component";
import {
  updateLockedQuizUser,
  updateFinalResultUser,
  updatePassedQuizUser,
  updateCountPassedCurrentUserQuiz,
  updateCountPassedAllQuizzes,
  updateNumbersOfApproachesCurrentUserQuiz,
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
  klasa,
  passed,
  setPassed,
  restartQuiz,
  setRestartQuiz,
  setEndTime,
  quizLength,
}) => {
  const { currentUser, userQuiz, summaryQuiz, userGeneralStatistics } =
    useContext(AuthContext);

  const [finalResult, setFinalResult] = useState(
    userQuiz[currentQuizNumber].finalScore
  );

  const navigate = useNavigate();
  const closeQuizHandle = () => {
    navigate("../");
    navigate(0);
    setRestartQuiz(false);
  };
  const backToPreviousPage = () => {
    navigate("../");
    setRestartQuiz(false);
  };

  const againDoQuizHandle = () => {
    setResult(false);
    setCurrentQuestion(0);
    setScore(0);
    setPassed(false);
    setRestartQuiz(true);
  };

  useEffect(() => {
    setFinalResult(userQuiz[currentQuizNumber].finalScore);
  }, [currentQuizNumber, userQuiz]);

  useEffect(() => {
    if (finalScore >= 50) {
      updateLockedQuizUser(
        currentUser.uid,
        klasa,
        `Quiz ${currentQuizNumber + 1}`
      );
    }
  }, []);

  useEffect(() => {
    if (finalScore > finalResult) {
      updateFinalResultUser(
        currentUser.uid,
        klasa,
        `Quiz ${currentQuizNumber}`,
        finalScore
      );
    }
  }, [finalScore]);

  useEffect(() => {
    if (finalScore < 100 && !passed) {
      updatePassedQuizUser(currentUser.uid, klasa, `Quiz ${currentQuizNumber}`);
    }
  }, []);

  useEffect(() => {
    if (finalScore === 100) {
      updateCountPassedCurrentUserQuiz(
        currentUser.uid,
        klasa,
        summaryQuiz[klasa].passedQuizzes
      );
      updateCountPassedAllQuizzes(
        currentUser.uid,
        userGeneralStatistics[0].passedAllQuizzes
      );
    }
  }, []);

  useEffect(() => {
    if (restartQuiz) {
      updateNumbersOfApproachesCurrentUserQuiz(
        currentUser.uid,
        klasa,
        summaryQuiz[klasa].numberOfApproaches
      );
    }
  }, [currentUser.uid, klasa, passed, summaryQuiz, restartQuiz]);

  useEffect(() => {
    if (!finalResult === 100 || !passed) {
      setEndTime(new Date().getTime() / 1000);
    }
  }, []);

  return (
    <>
      {passed & (finalResult === 100) ? (
        <div className="final-result-box">
          <img src={achivement} alt="puchar" className="img-achivement" />
          <h1 className="quiz-description">Rozwiązałeś poprawnie cały quiz!</h1>
          <p className="quiz-final-result">Twój wynik: {finalResult}%</p>
          <div className="result-btn-box">
            <Button onClick={backToPreviousPage}>Powrót</Button>
          </div>
        </div>
      ) : passed & (finalResult < 100) ? (
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
          {restartQuiz ? (
            (finalScore <= 100) & restartQuiz && (
              <>
                {finalScore < finalResult ? (
                  <h1 className="quiz-description">
                    Niestety nie udało Ci się poprawić wyniku
                  </h1>
                ) : (
                  <>
                    <h1 className="quiz-description">
                      Gratulacje udało Ci się poprawić poprzedni wynik!
                    </h1>
                    {finalScore >= 50 && (
                      <h2>
                        {currentQuizNumber < quizLength - 1
                          ? "Gratulacje udało Ci się odblokować kolejny quiz!"
                          : ""}
                      </h2>
                    )}
                  </>
                )}
                <p className="quiz-final-result">
                  Aktualny wynik: {finalResult}%
                </p>
              </>
            )
          ) : finalScore >= 50 ? (
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
