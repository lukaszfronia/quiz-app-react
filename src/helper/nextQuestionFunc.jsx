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
  setEndAfterHint,
  setCurrentAnswer
) => {
  ////////////////////////////TRUE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  if ((answer?.correct === true) & isHint) {
    setCurrentAnswer(answer.correct);
    setScore((prevScore) => prevScore + answer.score);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setCloseHint(false);
    } else {
      setResult(true);
      setCloseHint(false);
    }
  }
  if (isHint & (answer?.correct === false) & (currentQuestion === 0)) {
    setShowHint(true);
    setCurrentAnswer(answer.correct);
    setCurrentQuestion(currentQuestion);
    setCloseHint(false);
    setScore(1);
  }
  if (isHint & (answer?.correct === false) & (currentQuestion > 0)) {
    setShowHint(true);
    setCurrentAnswer(answer.correct);
    setCurrentQuestion(currentQuestion);
    setCloseHint(false);
  }

  /////////////////////////////FALSE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  if (!isHint & (answer?.correct === false) & (currentQuestion > 0)) {
    setCurrentAnswer(answer.correct);
    setScore((prevScore) => prevScore - 0);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setCloseHint(false);
      setEndAfterHint(new Date().getTime() / 1000);
    } else {
      setCloseHint(false);
      setResult(true);
    }
  }

  if (!isHint & (answer?.correct === false) & (currentQuestion === 0)) {
    setScore(0);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setCloseHint(false);
      setEndAfterHint(new Date().getTime() / 1000);
    } else {
      setCloseHint(false);
      setResult(true);
    }
  }
  if (!isHint & (answer?.correct === true)) {
    setCurrentAnswer(answer.correct);
    setScore((prevScore) => prevScore + answer.score);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setCloseHint(false);
      setEndAfterHint(new Date().getTime() / 1000);
    } else {
      setResult(true);
      setCloseHint(false);
    }
  }

  // else {
  //   if (isHint) {
  //     setScore((prevScore) => prevScore + answer.score);
  //   }
  // }
};

export default nextQuestion;
