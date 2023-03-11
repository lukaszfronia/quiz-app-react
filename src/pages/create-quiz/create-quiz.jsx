import { Routes, Route } from "react-router-dom";

import CreatedQuiz from "../../components/created-quiz.component/created-quiz.component";
import CreateQuizPreview from "../create-quiz-preview/create-quiz-preview";

const CreateQuiz = () => {
  return (
    <Routes>
      <Route index element={<CreateQuizPreview />} />
      <Route path=":quiz" element={<CreatedQuiz />} />
    </Routes>
  );
};

export default CreateQuiz;
