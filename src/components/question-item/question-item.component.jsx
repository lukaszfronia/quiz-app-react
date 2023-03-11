import "./question-item.styles.css";
import { useEffect, useState } from "react";
import nextQuestion from "../../helper/nextQuestionFunc";

const QuestionItem = ({
  question,
  answer,
  currentQuestion,
  questions,
  setCurrentQuestion,
  setResult,
  isHint,
  setScore,
  setShowHint,
  setCloseHint,
  setEndAfterHint,
  setCurrentAnswer,
  setOpen,
  setIsHintCreatedQuiz,
}) => {
  const [nextQuest, setNextQuest] = useState(false);

  const nextQuestionHandler = (e, answer) => {
    return nextQuestion(
      currentQuestion,
      questions,
      setCurrentQuestion,
      setResult,
      answer,
      setScore,
      setShowHint,
      isHint,
      setCloseHint,
      setEndAfterHint,
      setCurrentAnswer,
      setOpen,
      setIsHintCreatedQuiz
    );
  };

  return (
    <div
      key={Math.floor(Math.random() * 10000)}
      className="quiz-answer-box"
      onClick={(e) => {
        nextQuestionHandler(e, answer);
      }}
    >
      {answer.text}
    </div>
  );
};

export default QuestionItem;
