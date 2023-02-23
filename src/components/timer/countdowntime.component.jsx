import { useEffect, useState } from "react";

//Helper function
import nextQuestion from "../../helper/nextQuestionFunc";

const TIME_FOR_QUIZ = 90; // 1min 30sec
const TICK = 1000; // 1 sec

const CountDwownTimer = ({
  currentQuestion,
  currentQuiz,
  setCurrentQuestion,
  result,
  setResult,
}) => {
  const [time, setTime] = useState(TIME_FOR_QUIZ);
  useEffect(() => {
    if (time === 0) {
      nextQuestion(currentQuestion, currentQuiz, setCurrentQuestion, setResult);
    } else {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, TICK);
      console.log(time);
      return () => clearInterval(timer);
    }
  }, [time]);
  useEffect(() => {
    setTime(TIME_FOR_QUIZ);
  }, [currentQuestion]);

  const min = `${Math.trunc(time / 60)}`.padStart(2, "0");
  const sec = String(time % 60).padStart(2, "0");

  return (
    <div className="timer-box">
      {!result && (
        <h1 className="timer">
          Czas:
          <span>
            {" "}
            {min}:{sec}
          </span>
        </h1>
      )}
    </div>
  );
};

export default CountDwownTimer;
