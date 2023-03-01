import Result from "../components/result/result.component";

const nextQuestion = (
  currentQuestion,
  currentQuiz,
  setCurrentQuestion,
  setResult,
  answer,
  i,
  setScore
) => {
  console.log(answer.correct);
  if (answer?.correct === true) {
    setScore((prevScore) => prevScore + answer.score);
  }
  if (currentQuestion + 1 < currentQuiz.length) {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  } else {
    setResult(true);
  }
};

export default nextQuestion;
