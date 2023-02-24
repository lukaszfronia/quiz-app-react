const Result = ({ score, currentQuiz }) => {
  const finalScore = (score / currentQuiz.length) * 100;
  return <h1>Wynik: {finalScore}%</h1>;
};
export default Result;
