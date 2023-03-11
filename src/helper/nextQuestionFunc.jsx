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
  setCurrentAnswer,
  setOpen
) => {
  ////////////////////////////TRUE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  if ((answer?.correct === true) & isHint) {
    setCurrentAnswer(answer.correct);
    setScore((prevScore) => prevScore + answer.score);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setCloseHint(false);
    } else {
      setOpen(false);
      setResult(true);
      setCloseHint(false);
    }
  }
  if (isHint & (answer?.correct === false) & (currentQuestion === 0)) {
    setShowHint(true);
    setCurrentAnswer(answer.correct);
    setCurrentQuestion(currentQuestion);
    setCloseHint(false);
    setScore(1.02);
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
    setScore((prevScore) => prevScore + 0);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setCloseHint(false);
      setEndAfterHint(new Date().getTime() / 1000);
    } else {
      setCloseHint(false);
      setResult(true);
      setOpen(false);
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
      setOpen(false);
    }
  }
  if (!isHint & (answer?.correct === true) & (currentQuestion === 0)) {
    setCurrentAnswer(answer.correct);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setCloseHint(false);
      setEndAfterHint(new Date().getTime() / 1000);
    } else {
      setResult(true);
      setCloseHint(false);
      setOpen(false);
    }
  }
  if (!isHint & (answer?.correct === true) & (currentQuestion > 0)) {
    setCurrentAnswer(answer.correct);
    setScore((prevScore) => prevScore + answer.score + 0.02);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setCloseHint(false);
      setEndAfterHint(new Date().getTime() / 1000);
    } else {
      setResult(true);
      setCloseHint(false);
      setOpen(false);
    }
  }
  // else {
  //   if (isHint) {
  //     setScore((prevScore) => prevScore + answer.score);
  //   }
  // }
};

export default nextQuestion;
