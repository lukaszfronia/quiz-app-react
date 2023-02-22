import { useState, useEffect } from "react";
import "./quiz.component.styles.css";

const CurrentQuiz = ({
  quiz,
  currentQuestion,
  currentQuiz,
  setCurrentQuestion,
  setCurrentQuiz,
}) => {
  const nextQuestionHandler = () => {
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion >= currentQuiz.length - 1) {
      setCurrentQuestion(0);
    }
  };
  return (
    <>
      <div className="quiz-question">{quiz.question}</div>;
      <div className="quiz-answer-container">
        {quiz.answers.map((answer) => (
          <div className="quiz-answer-box" onClick={nextQuestionHandler}>
            {answer.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default CurrentQuiz;
