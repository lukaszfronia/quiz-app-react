import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../../context/quiz.context";
import { AuthContext } from "../../context/auth.context";

import CurrentQuiz from "../../components/quiz.component/quiz.component";
import Button from "../../components/button/button.component";
import {
  updateBestTimeCurrentUserQuiz,
  updateGeneralBestTime,
} from "../../utils/firebase/firebase.utils";
import "./quiz.styles.css";
import CountDwownTimer from "../../components/timer/countdowntime.component";
import Result from "../../components/result/result.component";

const Quiz = ({ klasa }) => {
  const { quiz } = useParams();
  const currentQuizNumber = +quiz.slice(5, 6);
  const { quizzes } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(quizzes[quiz]);
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const { userQuiz, summaryQuiz, currentUser } = useContext(AuthContext);
  const [passed, setPassed] = useState(userQuiz[currentQuizNumber].passed);
  const [restartQuiz, setRestartQuiz] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [bestTime, setBestTime] = useState("");

  const finalScore = (score / currentQuiz.length) * 100;
  const quizLength = Object.keys(quizzes).length;

  useEffect(() => {
    setBestTime(Math.floor(endTime - startTime));
  }, [endTime]);

  useEffect(() => {
    if (currentQuestion === currentQuiz.length - 1) {
      console.log(bestTime);
      if (summaryQuiz[klasa].bestTime >= bestTime) {
        updateBestTimeCurrentUserQuiz(currentUser.uid, klasa, bestTime);
        updateGeneralBestTime(currentUser.uid, bestTime);
      } else if (summaryQuiz[klasa].bestTime === 0) {
        updateBestTimeCurrentUserQuiz(currentUser.uid, klasa, bestTime);
        updateGeneralBestTime(currentUser.uid, bestTime);
      }
    }
  }, [bestTime]);

  useEffect(() => {
    setCurrentQuiz(quizzes[quiz]);
  }, [quiz, quizzes]);

  useEffect(() => {
    setQuestion(currentQuiz[currentQuestion]);
  }, [currentQuiz, currentQuestion]);

  useEffect(() => {
    setPassed(userQuiz[currentQuizNumber].passed);
  }, [currentQuizNumber, userQuiz]);

  return (
    <>
      <div className="quiz-container">
        {!result & !passed ? (
          question && (
            <CurrentQuiz
              quiz={question}
              currentQuestion={currentQuestion}
              currentQuiz={currentQuiz}
              setCurrentQuestion={setCurrentQuestion}
              setResult={setResult}
              setScore={setScore}
              passed={passed}
              klasa={klasa}
              setStartTime={setStartTime}
            />
          )
        ) : (
          <Result
            finalScore={finalScore}
            setResult={setResult}
            setCurrentQuestion={setCurrentQuestion}
            setScore={setScore}
            currentQuizNumber={currentQuizNumber}
            klasa={klasa}
            passed={passed}
            setPassed={setPassed}
            restartQuiz={restartQuiz}
            setRestartQuiz={setRestartQuiz}
            setEndTime={setEndTime}
            quizLength={quizLength}
          />
        )}
      </div>
      {!result & !passed && (
        <CountDwownTimer
          currentQuestion={currentQuestion}
          currentQuiz={currentQuiz}
          setCurrentQuestion={setCurrentQuestion}
          result={result}
          setResult={setResult}
        />
      )}
    </>
  );
};

export default Quiz;
