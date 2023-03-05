import { useEffect, useContext, useState } from "react";

import nextQuestion from "../../helper/nextQuestionFunc";
import "./quiz.component.styles.css";

import {
  updateNumbersOfApproachesCurrentUserQuiz,
  updateIsFirstOpenQuiz,
} from "../../utils/firebase/firebase.utils";
import { AuthContext } from "../../context/auth.context";

const CurrentQuiz = ({
  quiz,
  currentQuestion,
  currentQuiz,
  currentQuizNumber,
  setCurrentQuestion,
  setResult,
  setScore,
  passed,
  klasa,
  setStartTime,
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

  const { currentUser, summaryQuiz } = useContext(AuthContext);

  useEffect(() => {
    if (!passed) {
      updateNumbersOfApproachesCurrentUserQuiz(
        currentUser.uid,
        klasa,
        summaryQuiz[klasa].numberOfApproaches
      );
      updateIsFirstOpenQuiz(
        currentUser.uid,
        klasa,
        `Quiz ${currentQuizNumber}`
      );
    }
  }, [currentUser.uid, klasa, passed, summaryQuiz, currentQuizNumber]);

  useEffect(() => {
    setStartTime(new Date().getTime() / 1000);
  }, []);

  return (
    <>
      <div className="quiz-question">{quiz.question}</div>;
      <div className="quiz-answer-container">
        {quiz.answers.map((answer, i) => (
          <div
            className="quiz-answer-box"
            onClick={(e) => {
              nextQuestionHandler(e, i, answer);
            }}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default CurrentQuiz;
