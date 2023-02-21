import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { QuizContext } from "../../context/quiz.context";
import QuizCategory from "../../components/quiz-category/quiz-category.component";
import Quiz from "../quiz/quiz";

import "./klasa.styles.css";

const Klasa = () => {
  const { quizzes } = useContext(QuizContext);

  return (
    <Routes>
      <Route
        index="index"
        element={
          <>
            <div className="quiz-category">
              {Object.keys(quizzes).map((quiz, i) => {
                return <QuizCategory key={quiz} quiz={quiz} i={i + 1} />;
              })}
            </div>
          </>
        }
      />
      <Route path=":quiz" element={<Quiz />} />
    </Routes>
  );
};

export default Klasa;
