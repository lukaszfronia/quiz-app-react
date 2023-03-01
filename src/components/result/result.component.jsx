import Button from "../button/button.component";
import { updateDataUser } from "../../utils/firebase/firebase.utils";
import { AuthContext } from "../../context/auth.context";

import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

const Result = ({
  score,
  currentQuiz,
  setResult,
  setCurrentQuestion,
  setScore,
  currentQuizNumber,
  klasa,
}) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const closeQuizHandle = () => {
    navigate("../");
    window.location.reload(true);
  };

  const againDoQuizHandle = () => {
    setResult(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  const finalScore = (score / currentQuiz.length) * 100;
  useEffect(() => {
    if (finalScore >= 50) {
      updateDataUser(currentUser.uid, klasa, `Quiz ${currentQuizNumber + 1}`);
    }
  }, []);
  console.log(currentQuiz);

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
