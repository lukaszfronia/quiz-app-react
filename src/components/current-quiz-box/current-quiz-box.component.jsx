import { useEffect, useContext, useState } from "react";

import nextQuestion from "../../helper/nextQuestionFunc";
import "./currnet-quiz-box.styles.css";
import {
  updateNumbersOfApproachesCurrentUserQuiz,
  updateIsFirstOpenQuiz,
} from "../../utils/firebase/firebase.utils";
import { AuthContext } from "../../context/auth.context";

const CurrentQuizBox = ({
  question,
  currentQuestion,
  questions,
  currentQuizNumber,
  setCurrentQuestion,
  setResult,
  setScore,
  passed,
  currentClass,
  setStartTime,
}) => {
  const nextQuestionHandler = (e, i, answer) => {
    return nextQuestion(
      currentQuestion,
      questions,
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
        currentClass,
        summaryQuiz[currentClass].numberOfApproaches
      );
      updateIsFirstOpenQuiz(
        currentUser.uid,
        currentClass,
        `Quiz ${currentQuizNumber}`
      );
    }
  }, [currentClass, currentQuizNumber]);

  useEffect(() => {
    setStartTime(new Date().getTime() / 1000);
  }, []);

  return (
    <>
      <div className="quiz-question">{question.question}</div>;
      <div className="quiz-answer-container">
        {question.answers.map((answer, i) => (
          <div
            key={Math.floor(Math.random() * 10000)}
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

export default CurrentQuizBox;
