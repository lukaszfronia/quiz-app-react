import "./quiz-category.styles.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const QuizCategory = ({ quiz, i, userQuiz }) => {
  const [currentUserQuizData, setCurrentUserData] = useState("");
  const [currentNumber, setCurrentNumber] = useState(0);
  const [quizLocked, setQuizLocked] = useState(true);
  const [quizz, setQuiz] = useState(quiz);

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUserData(userQuiz[currentNumber]);
  }, [currentNumber, userQuiz]);

  useEffect(() => {
    setCurrentNumber(i);
  }, [i, setCurrentNumber]);

  useEffect(() => {
    setQuiz(quiz);
  }, [quiz]);
  console.log(quizz);

  // useEffect(() => {
  //   setQuizLocked(currentUserQuizData.locked);
  // }, [currentUserQuizData.locked]);

  const gotoQuizHandler = () => navigate(quiz);
  return (
    <div
      className={`quiz-category-box ${
        !currentUserQuizData.locked ? "disabled" : ""
      }`}
      onClick={gotoQuizHandler}
    >
      {currentUserQuizData.locked
        ? quiz.slice(0, 5) + (i + 1)
        : "Ten quiz jest jeszcze niedostępny"}
    </div>
  );
};

export default QuizCategory;
