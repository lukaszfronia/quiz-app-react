import Result from "../components/result/result.component";

const nextQuestion = (
  currentQuestion,
  questions,
  setCurrentQuestion,
  setResult,
  answer,
  i,
  setScore
) => {
  if (answer?.correct === true) {
    setScore((prevScore) => prevScore + answer.score);
  }
  if (currentQuestion + 1 < questions.length) {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  } else {
    setResult(true);
  }
};

export default nextQuestion;
