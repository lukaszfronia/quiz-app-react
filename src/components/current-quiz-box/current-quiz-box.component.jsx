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

import shuffleArray from "../../helper/shuffledArrayFunc";

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

  setOpen,
  setIsHintCreatedQuiz,
  score,
  nextQuestion,
}) => {
  const [shuffledAnswers, setShuffledAnswers] = useState(
    shuffleArray(question.answers)
  );

  useEffect(() => {
    setShuffledAnswers(shuffleArray(question.answers));
  }, []);

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
        {shuffledAnswers.map((answer, i) => (
          <QuestionItem
            key={Math.floor(Math.random() * 10000)}
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
            setOpen={setOpen}
            setIsHintCreatedQuiz={setIsHintCreatedQuiz}
            score={score}
            nextQuestion={nextQuestion}
          />
        ))}
      </div>
    </>
  );
};

export default CurrentQuizBox;
