import { useEffect, useState } from "react";

const TIME_FOR_QUIZ = 900; // 1min 40sec
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
  setCloseHint,
  isHint,
  setShowHint,
  setOpen,
  setTimeAfterHint,
  setIsHintCreatedQuiz,
}) => {
  const [time, setTime] = useState(TIME_FOR_QUIZ);
  useEffect(() => {
    if (time === 0) {
      if (isHint) {
        setShowHint(true);
        setIsHintCreatedQuiz(false);

        setCurrentQuestion(currentQuestion);
        setCloseHint(false);
      }
      // if (isHint & (answer?.correct === false) & (currentQuestion > 0)) {
      //   setShowHint(true);
      //   setIsHintCreatedQuiz(false);

      //   setCurrentQuestion(currentQuestion);
      //   setCloseHint(false);
      // }

      if (!isHint) {
        setIsHintCreatedQuiz(true);

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
    } else {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
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
        // score > 0 && setScore((prev) => prev - 0.01);
        // score < 0 && setScore((prev) => prev - 0.01);

        const timer = setInterval(() => {
          setTimeAfterHint((prevTime) => prevTime + 1);
        }, TICK);
        return () => clearInterval(timer);
      }
    }
  }, [closeHint, time]);

  useEffect(() => {
    setTime(TIME_FOR_QUIZ);
  }, [currentQuestion]);

  useEffect(() => {
    setTime(TIME_FOR_QUIZ);
  }, [closeHint]);
  useEffect(() => {
    setTimeAfterHint(0);
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
