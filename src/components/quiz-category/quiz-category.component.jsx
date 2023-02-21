import "./quiz-category.styles.css";
import { useNavigate } from "react-router-dom";

const QuizCategory = ({ quiz, i }) => {
  const navigate = useNavigate();

  const gotoQuizHandler = () => navigate(quiz);
  return (
    <div className="quiz-category-box" onClick={gotoQuizHandler}>
      {quiz.slice(0, 5) + i}
    </div>
  );
};

export default QuizCategory;
