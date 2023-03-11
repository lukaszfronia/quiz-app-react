import { useEffect, useState } from "react";

//Helper function
import nextQuestion from "../../helper/nextQuestionFunc";

const TIME_FOR_QUIZ = 100; // 1min 40sec
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
  setCloseHint,
  isHint,
  setShowHint,
  setOpen,
}) => {
  const [time, setTime] = useState(TIME_FOR_QUIZ);
  const [timeColapsed, setTimeColapsed] = useState(0);
  useEffect(() => {
    if (time === 0) {
      if (currentQuestion + 1 < questions.length) {
        if (isHint & (currentQuestion === 0)) {
          setShowHint(true);

          setCurrentQuestion(currentQuestion);
          setCloseHint(false);
          setScore(1.02);
        }
        if (isHint & (currentQuestion > 0)) {
          setShowHint(true);

          setCurrentQuestion(currentQuestion);
          setCloseHint(false);
        }

        if (!isHint & (currentQuestion > 0)) {
          setScore((prevScore) => prevScore + 0);
          if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setCloseHint(false);
          } else {
            setCloseHint(false);
            setResult(true);
            setOpen(false);
          }
        }

        if (!isHint & (currentQuestion === 0)) {
          setScore(0);
          if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setCloseHint(false);
          } else {
            setCloseHint(false);
            setResult(true);
            setOpen(false);
          }
        }
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
        score > 0 && setScore((prev) => prev + 0);
        score < 0 && setScore(0);
        setCloseHint(false);
      } else {
        score > 0 && setScore((prev) => prev - 0.01);
        score < 0 && setScore((prev) => prev - 0.01);
      }
    }
  }, [time]);

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
