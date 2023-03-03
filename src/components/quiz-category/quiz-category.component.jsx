import "./quiz-category.styles.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import locker from "./keyhole-g218248404_1280.png";

const QuizCategory = ({ quiz, i, userQuiz }) => {
  const [currentUserQuizData, setCurrentUserData] = useState("");
  const [currentNumber, setCurrentNumber] = useState(0);
  // const [quizLocked, setQuizLocked] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUserData(userQuiz[currentNumber]);
  }, [currentNumber, userQuiz]);

  useEffect(() => {
    setCurrentNumber(i);
  }, [i, setCurrentNumber]);

  const gotoQuizHandler = () => navigate(quiz);
  return (
    <div className={`quiz-category-box`} onClick={gotoQuizHandler}>
      {!currentUserQuizData?.locked ? (
        <>
          <div>
            <div className="circle-1">
              <div className="circle-2">
                <p className="quiz-name">{quiz.slice(0, 5) + (i + 1)}</p>
              </div>
            </div>
            <p className="quiz-finalscore">
              {currentUserQuizData?.finalScore}%
            </p>
          </div>
        </>
      ) : (
        <div className="circle-3">
          <div className="circle-4">
            <img src={locker} alt="kłódka" className="locker" />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizCategory;
