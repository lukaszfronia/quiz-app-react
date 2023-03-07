import "./quiz-item.styles.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../context/auth.context";
import locker from "./keyhole-g218248404_1280.png";

const QuizItem = ({ quiz, i, currentClass }) => {
  const { quizInformationFromCurrentUser, setClassCategory } =
    useContext(AuthContext);

  const [currentUserQuizInformation, setCurrentUserQuizInformation] =
    useState("");
  const [currentNumber, setCurrentNumber] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setClassCategory(currentClass);
  }, [currentClass, setClassCategory]);

  useEffect(() => {
    setCurrentUserQuizInformation(
      quizInformationFromCurrentUser[currentNumber]
    );
  }, [currentNumber, quizInformationFromCurrentUser]);

  useEffect(() => {
    setCurrentNumber(i);
  }, [i, setCurrentNumber]);

  const gotoQuizHandler = () => navigate(quiz);
  return (
    <div
      className={`quiz-category-box ${
        currentUserQuizInformation?.locked && "locked"
      }`}
      onClick={gotoQuizHandler}
    >
      {!currentUserQuizInformation?.locked ? (
        <>
          <div>
            <div className="circle-1">
              <div className="circle-2">
                <p className="quiz-name">{quiz.slice(0, 5) + (i + 1)}</p>
              </div>
            </div>
            <p className="quiz-finalscore">
              {currentUserQuizInformation?.finalScore}%
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

export default QuizItem;
