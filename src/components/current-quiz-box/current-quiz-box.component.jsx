import { useEffect, useContext, useState } from "react";

import nextQuestion from "../../helper/nextQuestionFunc";
import QuestionItem from "../../components/question-item/question-item.component";
import "./currnet-quiz-box.styles.css";
import {
  updateNumbersOfApproachesCurrentUserQuiz,
  updateIsFirstOpenQuiz,
  updadateCurrentQuestionHint,
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

  performed,
  currentClass,
  setStartTime,
  setIsFirstOpen,
  setShowHint,
  showHint,
  isHint,
  setCloseHint,
  setEndAfterHint,
  setCurrentAnswer,
  setOpen,
  setIsHintCreatedQuiz,
}) => {
  useEffect(() => {
    setIsFirstOpen(false);
  }, []);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    setShowHint(false);
  }, [setShowHint]);

  return (
    <>
      <div className="quiz-question">{question.question}</div>
      <div className="quiz-answer-container">
        {question.answers.map((answer, i) => (
          <QuestionItem
            question={question}
            answer={answer}
            currentQuestion={currentQuestion}
            questions={questions}
            setCurrentQuestion={setCurrentQuestion}
            setResult={setResult}
            isHint={isHint}
            setScore={setScore}
            setShowHint={setShowHint}
            setCloseHint={setCloseHint}
            setEndAfterHint={setEndAfterHint}
            setCurrentAnswer={setCurrentAnswer}
            setOpen={setOpen}
            setIsHintCreatedQuiz={setIsHintCreatedQuiz}
          />
        ))}
      </div>
    </>
  );
};

export default CurrentQuizBox;
