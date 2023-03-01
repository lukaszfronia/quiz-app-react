import { useContext, useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import { QuizContext } from "../../context/quiz.context";
import { AuthContext } from "../../context/auth.context";
import QuizCategory from "../../components/quiz-category/quiz-category.component";
import Quiz from "../quiz/quiz";

import "./klasa.styles.css";

const Klasa = () => {
  const { klasa } = useParams();
  const { quizzes, quizLocked, setQuizLocked } = useContext(QuizContext);
  const { userQuiz, setClassCategory } = useContext(AuthContext);

  // const [currentUserQuiz, setCurrentUserQuiz] = useState(userQuiz[klasa]);
  console.log(userQuiz);
  useEffect(() => {
    setClassCategory(klasa);
  }, [klasa]);

  // useEffect(() => {
  //   setCurrentUserQuiz(userQuiz[klasa]);
  // }, [klasa, userQuiz]);
  // console.log(currentUserQuiz);
  // console.log(quizzes);

  return (
    <Routes>
      <Route
        index="index"
        element={
          <>
            <div className="quiz-category">
              {quizzes &&
                Object.keys(quizzes).map((quiz, i) => {
                  return (
                    <QuizCategory
                      key={quiz}
                      quiz={quiz}
                      i={i}
                      userQuiz={userQuiz}
                      quizLocked={quizLocked}
                      setQuizLocked={setQuizLocked}
                    />
                  );
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
