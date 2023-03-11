import { useContext, useState, useEffect } from "react";

import CurrentQuizBox from "../current-quiz-box/current-quiz-box.component";
import CountDwownTimer from "../timer/countdowntime.component";
import Hint from "../hint/hint.component";
import Result from "../result/result.component";
import { useParams } from "react-router";
import { CreateQuizContext } from "../../context/createQuiz";

const CreatedQuiz = () => {
  const { quiz } = useParams();
  const { createdQuizzes } = useContext(CreateQuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(createdQuizzes[quiz]);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [restartQuiz, setRestartQuiz] = useState(false);
  const [bestTime, setBestTime] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [closeHint, setCloseHint] = useState(false);
  const [grade, setGrade] = useState(null);
  const [open, setOpen] = useState(false);
  const finalScore = Math.floor((score / questions.length) * 100);
  const quizLength = Object.keys(createdQuizzes).length;
  const [isHint, setIsHintCreatedQuiz] = useState(true);
  useEffect(() => {
    setBestTime((prev) => prev + Math.floor(endTime - startTime));
  }, [endTime]);

  useEffect(() => {
    if ((finalScore >= 0) & (finalScore < 49)) {
      setGrade(1);
    } else if ((finalScore >= 50) & (finalScore <= 59)) {
      setGrade(2);
    } else if ((finalScore >= 60) & (finalScore <= 74)) {
      setGrade(3);
    } else if ((finalScore >= 75) & (finalScore <= 89)) {
      setGrade(4);
    } else if ((finalScore >= 90) & (finalScore <= 100)) {
      setGrade(5);
    }
  }, [finalScore]);

  useEffect(() => {
    setCurrentQuiz(createdQuizzes[quiz]);
  }, [quiz, createdQuizzes]);

  useEffect(() => {
    const question = currentQuiz.questions.map((question) => {
      return question;
    });
    setQuestions(question);
  }, [currentQuiz.questions]);

  useEffect(() => {
    setQuestion(questions[currentQuestion]);
  }, [questions, currentQuestion]);

  console.log(question);
  useEffect(() => {
    setStartTime(new Date().getTime() / 1000);
  }, []);

  return (
    <div className="quiz-container">
      <div className="quiz-box">
        {!result ? (
          !showHint ? (
            question && (
              <CurrentQuizBox
                question={question}
                currentQuestion={currentQuestion}
                questions={questions}
                setCurrentQuestion={setCurrentQuestion}
                setResult={setResult}
                setScore={setScore}
                setStartTime={setStartTime}
                setIsFirstOpen={setIsFirstOpen}
                setShowHint={setShowHint}
                setCloseHint={setCloseHint}
                showHint={showHint}
                isHint={isHint}
                setOpen={setOpen}
                setIsHintCreatedQuiz={setIsHintCreatedQuiz}
              />
            )
          ) : (
            <Hint
              setShowHint={setShowHint}
              showHint={showHint}
              setCloseHint={setCloseHint}
              question={question}
            />
          )
        ) : (
          <Result
            finalScore={finalScore}
            setResult={setResult}
            setCurrentQuestion={setCurrentQuestion}
            setScore={setScore}
            restartQuiz={restartQuiz}
            setRestartQuiz={setRestartQuiz}
            setEndTime={setEndTime}
            quizLength={quizLength}
            isFirstOpen={isFirstOpen}
            setIsFirstOpen={setIsFirstOpen}
            grade={grade}
            setOpen={setOpen}
            bestTime={bestTime}
          />
        )}
      </div>
      {!result & !showHint ? (
        <CountDwownTimer
          currentQuestion={currentQuestion}
          currentQuiz={currentQuiz}
          questions={questions}
          setCurrentQuestion={setCurrentQuestion}
          result={result}
          setResult={setResult}
          closeHint={closeHint}
          score={score}
          setScore={setScore}
          question={question}
          setCloseHint={setCloseHint}
          isHint={isHint}
          setShowHint={setShowHint}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default CreatedQuiz;
