import { useState, useEffect } from "react";
import nextQuestion from "../../helper/nextQuestionFunc";
import "./quiz.component.styles.css";

const CurrentQuiz = ({
  quiz,
  currentQuestion,
  currentQuiz,
  setCurrentQuestion,
  setResult,
}) => {
  const nextQuestionHandler = () => {
    return nextQuestion(
      currentQuestion,
      currentQuiz,
      setCurrentQuestion,
      setResult
    );
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
