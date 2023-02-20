import { useContext } from "react";

import { QuizContext } from "../../context/quiz.context";
import QuizCategory from "../../components/quiz-category/quiz-category.component";

import "./klasa.styles.css";

const Klasa = () => {
  const { quizzes } = useContext(QuizContext);

  return (
    <>
      <div className="quiz-category">
        {Object.keys(quizzes).map((title, i) => {
          return <QuizCategory key={title} title={title} i={i + 1} />;
        })}
      </div>
    </>
  );
};

export default Klasa;
