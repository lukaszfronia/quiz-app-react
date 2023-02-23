import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../../context/quiz.context";

import CurrentQuiz from "../../components/quiz.component/quiz.component";
import Button from "../../components/button/button.component";

import "./quiz.styles.css";
import CountDwownTimer from "../../components/timer/countdowntime.component";
import Result from "../../components/result/result.component";

const Quiz = () => {
  const { quiz } = useParams();
  const { quizzes } = useContext(QuizContext);
  const [currentQuiz, setCurrentQuiz] = useState(quizzes[quiz]);
  const [question, setQuestion] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0); // Czy to tu potrzebne , może byc w innym komponencie :)

  useEffect(() => {
    setCurrentQuiz(quizzes[quiz]);
  }, [quiz, quizzes]);

  useEffect(() => {
    setQuestion(currentQuiz[currentQuestion]);
  }, [currentQuiz, currentQuestion]);

  return (
    <>
      <div className="quiz-container">
        {!result ? (
          question && (
            <CurrentQuiz
              quiz={question}
              currentQuestion={currentQuestion}
              currentQuiz={currentQuiz}
              setCurrentQuestion={setCurrentQuestion}
              setResult={setResult}
            />
          )
        ) : (
          <Result />
        )}
      </div>
      <CountDwownTimer
        currentQuestion={currentQuestion}
        currentQuiz={currentQuiz}
        setCurrentQuestion={setCurrentQuestion}
        result={result}
        setResult={setResult}
      />
    </>
  );
};

export default Quiz;
