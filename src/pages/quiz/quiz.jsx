import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../../context/quiz.context";

import CurrentQuiz from "../../components/quiz.component/quiz.component";
import Button from "../../components/button/button.component";

import "./quiz.styles.css";

const Quiz = () => {
  const { quiz } = useParams();
  const { quizzes } = useContext(QuizContext);
  const [currentQuiz, setCurrentQuiz] = useState(quizzes[quiz]);
  const [question, setQuestion] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    setCurrentQuiz(quizzes[quiz]);
  }, [quiz, quizzes]);

  useEffect(() => {
    setQuestion(currentQuiz[currentQuestion]);
  }, [currentQuiz, currentQuestion]);

  return (
    <>
      <div className="quiz-container">
        {question && (
          <CurrentQuiz
            quiz={question}
            currentQuestion={currentQuestion}
            currentQuiz={currentQuiz}
            setCurrentQuestion={setCurrentQuestion}
            setCurrentQuiz={setCurrentQuiz}
          />
        )}
      </div>
      <div className="timer-box">
        <h1 className="timer">
          Czas:
          <span> 01:30</span>
        </h1>
      </div>
    </>
  );
};

export default Quiz;
