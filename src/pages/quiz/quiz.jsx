import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../../context/quiz.context";

import CurrentQuiz from "../../components/quiz.component/quiz.component";
import Button from "../../components/button/button.component";

const Quiz = () => {
  const { quiz } = useParams();
  const { quizzes } = useContext(QuizContext);
  const [currentQuiz, setCurrentQuiz] = useState(quizzes[quiz]);
  const [question, setQuestion] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    setCurrentQuiz(quizzes[quiz]);
  }, [quiz, quizzes]);

  useEffect(() => {
    setQuestion(currentQuiz[currentQuestion]);
  }, [currentQuiz, currentQuestion]);

  const nextQuestionHandler = () => {
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion >= currentQuiz.length - 1) {
      setCurrentQuestion(0);
    }
  };

  return (
    <>
      <div>
        {question && <CurrentQuiz quiz={question} />}
        <Button onClick={nextQuestionHandler}>Dalej</Button>
      </div>
    </>
  );
};

export default Quiz;
