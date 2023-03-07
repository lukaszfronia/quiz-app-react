import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import QuizItem from "../../components/quiz-item/quiz-item.component";
import { QuizContext } from "../../context/quiz.context";

import BackButton from "../../components/button/back-button.conponent";
import "./quiz-preview.styles.css";

const QuizPreview = ({ currentClass }) => {
  const { quizzes } = useContext(QuizContext);
  const navigate = useNavigate();

  const backToPreviousPage = () => {
    navigate("../");
  };
  return (
    <div className="quiz-category">
      <div className="name-back-box">
        <BackButton onClick={backToPreviousPage} />
        <p className="quiz-category-name">{currentClass}</p>
      </div>
      {quizzes &&
        Object.keys(quizzes).map((quiz, i) => {
          return (
            <QuizItem
              key={Math.floor(Math.random() * 100000)}
              quiz={quiz}
              i={i}
              currentClass={currentClass}
            />
          );
        })}
    </div>
  );
};
export default QuizPreview;
