import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../../context/quiz.context";
import { AuthContext } from "../../context/auth.context";

import CurrentQuiz from "../../components/quiz.component/quiz.component";
import Button from "../../components/button/button.component";

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
  const { userQuiz } = useContext(AuthContext);
  const [passes, setPasses] = useState(userQuiz[currentQuizNumber].passes);
  const [restartQuiz, setRestartQuiz] = useState(false);

  useEffect(() => {
    setCurrentQuiz(quizzes[quiz]);
  }, [quiz, quizzes]);

  useEffect(() => {
    setQuestion(currentQuiz[currentQuestion]);
  }, [currentQuiz, currentQuestion]);

  useEffect(() => {
    setPasses(userQuiz[currentQuizNumber].passes);
  }, [currentQuizNumber, userQuiz]);

  return (
    <>
      <div className="quiz-container">
        {!result & !passes ? (
          question && (
            <CurrentQuiz
              quiz={question}
              currentQuestion={currentQuestion}
              currentQuiz={currentQuiz}
              setCurrentQuestion={setCurrentQuestion}
              setResult={setResult}
              setScore={setScore}
            />
          )
        ) : (
          <Result
            score={score}
            currentQuiz={currentQuiz}
            setResult={setResult}
            setCurrentQuestion={setCurrentQuestion}
            setScore={setScore}
            currentQuizNumber={currentQuizNumber}
            klasa={klasa}
            passes={passes}
            setPasses={setPasses}
            restartQuiz={restartQuiz}
            setRestartQuiz={setRestartQuiz}
          />
        )}
      </div>
      {!result & !passes && (
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
