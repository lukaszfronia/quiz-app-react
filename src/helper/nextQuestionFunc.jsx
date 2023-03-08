import Result from "../components/result/result.component";

const nextQuestion = (
  currentQuestion,
  questions,
  setCurrentQuestion,
  setResult,
  answer,

  setScore,
  setShowHint,

  isHint,
  setCloseHint,
  setEndAfterHint
) => {
  ////////////////////////////TRUE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  if ((answer?.correct === true) & isHint) {
    setScore((prevScore) => prevScore + answer.score);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setResult(true);
    }
  }
  if (isHint & (answer?.correct === false)) {
    setShowHint(true);
    setCurrentQuestion(currentQuestion);
    setCloseHint(false);
  }

  /////////////////////////////FALSE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  if (!isHint & (answer?.correct === false)) {
    setScore((prevScore) => prevScore - 1);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setEndAfterHint(new Date().getTime() / 1000);
    } else {
      setResult(true);
    }
  }
  if (!isHint & (answer?.correct === true)) {
    setScore((prevScore) => prevScore + answer.score);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setEndAfterHint(new Date().getTime() / 1000);
    } else {
      setResult(true);
    }
  }

  // else {
  //   if (isHint) {
  //     setScore((prevScore) => prevScore + answer.score);
  //   }
  // }
};

export default nextQuestion;
