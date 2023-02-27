import Button from "../button/button.component";

import { useNavigate } from "react-router-dom";

const Result = ({
  score,
  currentQuiz,
  setResult,
  setCurrentQuestion,
  setScore,
}) => {
  const navigate = useNavigate();
  const closeQuizHandle = () => navigate(-1);

  const againDoQuizHandle = () => {
    setResult(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  const finalScore = (score / currentQuiz.length) * 100;
  return (
    <>
      <h1>Wynik: {finalScore}%</h1>
      <Button onClick={closeQuizHandle}>Zakończ</Button>

      {finalScore < 50 ? (
        <Button onClick={againDoQuizHandle}>Jeszcze raz</Button>
      ) : (
        ""
      )}
    </>
  );
};
export default Result;
