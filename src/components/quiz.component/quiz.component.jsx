import { useState, useEffect } from "react";
import nextQuestion from "../../helper/nextQuestionFunc";
import "./quiz.component.styles.css";

const CurrentQuiz = ({
  quiz,
  currentQuestion,
  currentQuiz,
  setCurrentQuestion,
  setResult,
  setScore,
}) => {
  const nextQuestionHandler = (e, i, answer) => {
    return nextQuestion(
      currentQuestion,
      currentQuiz,
      setCurrentQuestion,
      setResult,
      answer,
      i,
      setScore
    );
  };

  return (
    <>
      <div className="quiz-question">{quiz.question}</div>;
      <div className="quiz-answer-container">
        {quiz.answers.map((answer, i) => (
          <div
            className="quiz-answer-box"
            onClick={(e) => nextQuestionHandler(e, i, answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default CurrentQuiz;
