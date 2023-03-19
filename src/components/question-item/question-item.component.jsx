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
  score,
}) => {
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
      setOpen,
      setIsHintCreatedQuiz,
      score
    );
  };

  return (
    <div
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
