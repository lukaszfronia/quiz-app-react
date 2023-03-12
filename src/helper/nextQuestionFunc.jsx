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

  if (!isHint & (answer?.correct === true)) {
    setScore((prevScore) => prevScore + 1);
    setIsHintCreatedQuiz(true);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setCloseHint(false);
    } else {
      setResult(true);
      setCloseHint(false);
      setOpen(false);
    }
  }
  /////////////////////////////FALSE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  if (isHint & (answer?.correct === false)) {
    setShowHint(true);
    setIsHintCreatedQuiz(false);

    setCurrentQuestion(currentQuestion);
    setCloseHint(false);
  }

  if (!isHint & (answer?.correct === false)) {
    setIsHintCreatedQuiz(true);

    setScore((prevScore) => prevScore + 0);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setCloseHint(false);
    } else {
      setCloseHint(false);
      setResult(true);
      setOpen(false);
    }
  }
};

export default nextQuestion;
