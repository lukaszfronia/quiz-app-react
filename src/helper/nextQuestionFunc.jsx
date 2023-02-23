import Result from "../components/result/result.component";

const nextQuestion = (
  currentQuestion,
  currentQuiz,
  setCurrentQuestion,
  setResult
) => {
  if (currentQuestion + 1 < currentQuiz.length) {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  } else {
    setResult(true);
  }
};

export default nextQuestion;
