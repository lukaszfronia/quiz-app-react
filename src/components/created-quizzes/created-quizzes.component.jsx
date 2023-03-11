import { useContext } from "react";

import { CreateQuizContext } from "../../context/createQuiz";
import { AuthContext } from "../../context/auth.context";

import "./created-quizzes.styles.css";
import CreatedQuizItem from "../created-quiz-item/created-quiz-item.component";

const CreatedQuizzes = () => {
  const { createdQuizzesToDisplay } = useContext(CreateQuizContext);
  const { currentUser } = useContext(AuthContext);

  const quizzesToDisplay = currentUser
    ? createdQuizzesToDisplay.filter((quiz) => quiz.uid === currentUser.uid)
    : createdQuizzesToDisplay;
  console.log();
  return (
    <div className="created-quizzes-container">
      <h1>Stworzone Quizy</h1>
      <div className="created-quizzes-box">
        {quizzesToDisplay.length > 0 ? (
          quizzesToDisplay.map((createdQuiz, i) => {
            return <CreatedQuizItem createdQuiz={createdQuiz} />;
          })
        ) : (
          <p className="created-quizzes-description">
            Nie stworzyłeś jeszcze żadnego quizu!
          </p>
        )}
        {}
      </div>
    </div>
  );
};

export default CreatedQuizzes;
