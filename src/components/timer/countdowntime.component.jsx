import { useEffect, useState } from "react";

//Helper function
import nextQuestion from "../../helper/nextQuestionFunc";

const TIME_FOR_QUIZ = 90; // 1min 30sec
const TICK = 1000; // 1 sec

const CountDwownTimer = ({
  currentQuestion,
  currentQuiz,
  questions,
  setCurrentQuestion,
  result,
  setResult,
  closeHint,
  score,
  setScore,
  currentAnswer,
}) => {
  const [time, setTime] = useState(TIME_FOR_QUIZ);
  const [timeColapsed, setTimeColapsed] = useState(0);
  useEffect(() => {
    if (time === 0) {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      } else {
        setResult(true);
      }
    } else {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        setTimeColapsed((prev) => prev + 1);
      }, TICK);
      return () => clearInterval(timer);
    }
  }, [time]);

  useEffect(() => {
    if (closeHint) {
      if (time === 0) {
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        } else {
          setResult(true);
        }
      } else {
        score > 0 && setScore((prev) => prev - 0.01);
        score < 0 && setScore((prev) => prev - 0.01);
      }
    }
  }, [closeHint, time]);

  useEffect(() => {
    setTime(TIME_FOR_QUIZ);
  }, [currentQuestion]);

  useEffect(() => {
    setTime(TIME_FOR_QUIZ);
  }, [closeHint]);

  const min = `${Math.trunc(time / 60)}`.padStart(2, "0");
  const sec = String(time % 60).padStart(2, "0");

  return (
    <div className="timer-box">
      {!result && (
        <h1 className="timer">
          Czas:{" "}
          <span>
            {min}:{sec}
          </span>
        </h1>
      )}
    </div>
  );
};

export default CountDwownTimer;
