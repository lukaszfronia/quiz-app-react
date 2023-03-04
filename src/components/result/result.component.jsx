import Button from "../button/button.component";
import {
  updateLockedQuizUser,
  updateFinalResultUser,
  updatePassedQuizUser,
} from "../../utils/firebase/firebase.utils";
import { AuthContext } from "../../context/auth.context";

import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

import achivement from "./achievement-g9826017dd_1280.png";
import "./result.styles.css";

const Result = ({
  score,
  currentQuiz,
  setResult,
  setCurrentQuestion,
  setScore,
  currentQuizNumber,
  klasa,
  passed,
  setPassed,
  restartQuiz,
  setRestartQuiz,
}) => {
  const { currentUser, userQuiz } = useContext(AuthContext);

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

  const finalScore = (score / currentQuiz.length) * 100;

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
    if (finalScore >= 50 && !passed) {
      updatePassedQuizUser(currentUser.uid, klasa, `Quiz ${currentQuizNumber}`);
    }
  }, []);

  console.log(restartQuiz);

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
      ) : passed & ((finalResult >= 50) & (finalResult < 100)) ? (
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
                  <h1 className="quiz-description">
                    Gratulacje udało Ci się poprawić poprzedni wynik
                  </h1>
                )}
                <p className="quiz-final-result">
                  Aktualny wynik: {finalResult}%
                </p>
              </>
            )
          ) : finalScore >= 50 ? (
            <>
              <h1 className="quiz-description">Rozwiązałeś poprawnie quiz</h1>
              <h2>Gratulacje udało Ci się odblokować kolejny quiz!</h2>
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
