import { useContext, useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";

import { QuizContext } from "../../context/quiz.context";
import { AuthContext } from "../../context/auth.context";
import QuizCategory from "../../components/quiz-category/quiz-category.component";
import Quiz from "../quiz/quiz";

import BackButton from "../../components/button/back-button.conponent";

import "./klasa.styles.css";

const Klasa = () => {
  const { klasa } = useParams();
  const { quizzes, quizLocked, setQuizLocked } = useContext(QuizContext);
  const { userQuiz, setClassCategory } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setClassCategory(klasa);
  }, [klasa, setClassCategory]);

  const backToPreviousPage = () => {
    navigate("../");
  };

  return (
    <Routes>
      <Route
        index="index"
        element={
          <>
            <div className="quiz-category">
              <div className="name-back-box">
                <BackButton onClick={backToPreviousPage} />
                <p className="quiz-category-name">{klasa}</p>
              </div>
              {quizzes &&
                Object.keys(quizzes).map((quiz, i) => {
                  return <QuizCategory quiz={quiz} i={i} userQuiz={userQuiz} />;
                })}
            </div>
          </>
        }
      />
      <Route path=":quiz" element={<Quiz klasa={klasa} />} />
    </Routes>
  );
};

export default Klasa;
