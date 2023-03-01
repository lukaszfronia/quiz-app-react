import Button from "../button/button.component";
import {
  updateLockedQuizUser,
  updateFinalResultUser,
  updatePassesQuizUser,
} from "../../utils/firebase/firebase.utils";
import { AuthContext } from "../../context/auth.context";

import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

const Result = ({
  score,
  currentQuiz,
  setResult,
  setCurrentQuestion,
  setScore,
  currentQuizNumber,
  klasa,
  passes,
}) => {
  const { currentUser, userQuiz } = useContext(AuthContext);

  const [finalResult, setFinalResult] = useState(
    userQuiz[currentQuizNumber].finalScore
  );
  const [locked, setLocked] = useState(null); //??????????????????

  const navigate = useNavigate();
  const closeQuizHandle = () => {
    navigate("../");
    navigate(0);
  };

  const againDoQuizHandle = () => {
    setResult(false);
    setCurrentQuestion(0);
    setScore(0);
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
    if (finalScore === 100 && !passes) {
      updatePassesQuizUser(currentUser.uid, klasa, `Quiz ${currentQuizNumber}`);
    }
  }, []);

  return (
    <>
      {passes ? (
        <>
          <h1>Rozwiązałeś poprawnie cały quiz</h1>
          <Button onClick={closeQuizHandle}>Zakończ</Button>
        </>
      ) : (
        <>
          <h1>Wynik: {finalScore}%</h1>
          <Button onClick={closeQuizHandle}>Zakończ</Button>

          {finalScore < 50 ? (
            <Button onClick={againDoQuizHandle}>Jeszcze raz</Button>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};
export default Result;
