import { Routes, Route, useParams } from "react-router-dom";

import Quiz from "../quiz/quiz";
import QuizPreview from "../quiz-preview/quiz-preview";

const CategoryClass = () => {
  const { currentClass } = useParams();

  return (
    <Routes>
      <Route
        index="index"
        element={<QuizPreview currentClass={currentClass} />}
      />
      <Route path=":quiz" element={<Quiz currentClass={currentClass} />} />
    </Routes>
  );
};

export default CategoryClass;
