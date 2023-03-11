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
  setOpen,
  setIsHintCreatedQuiz
) => {
  ////////////////////////////TRUE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  if ((answer?.correct === true) & isHint) {
    setScore((prevScore) => prevScore + 1);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setCloseHint(false);
    } else {
      setOpen(false);
      setResult(true);
      setCloseHint(false);
    }
  }

  if (!isHint & (answer?.correct === true) & (currentQuestion === 0)) {
    setIsHintCreatedQuiz(true);

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
    setScore((prevScore) => prevScore + 1.02);
    setIsHintCreatedQuiz(true);

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
  /////////////////////////////FALSE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  if (isHint & (answer?.correct === false) & (currentQuestion === 0)) {
    setShowHint(true);
    setIsHintCreatedQuiz(false);

    setCurrentQuestion(currentQuestion);
    setCloseHint(false);
    setScore(1.02);
  }
  if (isHint & (answer?.correct === false) & (currentQuestion > 0)) {
    setShowHint(true);
    setIsHintCreatedQuiz(false);

    setCurrentQuestion(currentQuestion);
    setCloseHint(false);
  }

  if (!isHint & (answer?.correct === false) & (currentQuestion > 0)) {
    setIsHintCreatedQuiz(true);

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
    setIsHintCreatedQuiz(true);

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
};

export default nextQuestion;
