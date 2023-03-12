import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../../context/quiz.context";
import { AuthContext } from "../../context/auth.context";

import CurrentQuizBox from "../../components/current-quiz-box/current-quiz-box.component";

import {
  updateBestTimeCurrentUserQuiz,
  updateGeneralBestTime,
  updateCountPassedCurrentUserQuiz,
  updateCountPassedAllQuizzes,
  updadateCurrentQuestionHint,
  updadateCurrentQuestionHintAll,
  updateUsedTimeQuizUser,
  updateGradeQuizUser,
  updateNumbersOfApproachesCurrentUserQuiz,
  updateIsFirstOpenQuiz,
  updateMadeQuizzesCurrentUserQuiz,
  updateFinalResultUser,
} from "../../utils/firebase/firebase.utils";
import "./quiz.styles.css";
import CountDwownTimer from "../../components/timer/countdowntime.component";
import Result from "../../components/result/result.component";
import Hint from "../../components/hint/hint.component";

import shuffleArray from "../../helper/shuffledArrayFunc";

const Quiz = ({ currentClass }) => {
  const { quiz } = useParams();
  const { quizzes } = useContext(QuizContext);

  const {
    currentUser,
    quizInformationFromCurrentUser,
    summaryQuiz,
    userGeneralStatistics,
  } = useContext(AuthContext);
  const currentQuizNumber = +quiz.slice(5, 6);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(quizzes[quiz]);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(
    quizInformationFromCurrentUser[currentQuizNumber].performed
  );

  const [performed, setPerformed] = useState(
    quizInformationFromCurrentUser[currentQuizNumber].performed
  );

  const [finalResult, setFinalResult] = useState(
    quizInformationFromCurrentUser[currentQuizNumber].finalScore
  );
  const [usedTime, setUsedTime] = useState(
    quizInformationFromCurrentUser[currentQuizNumber].usedTime
  );
  const [gradeObtained, setGradeObtained] = useState(
    quizInformationFromCurrentUser[currentQuizNumber].grade
  );
  const [madeQuizzes, setMadeQuizzes] = useState(
    quizInformationFromCurrentUser[currentQuizNumber].madeQuizzes
  );
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [restartQuiz, setRestartQuiz] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [bestTime, setBestTime] = useState(0);
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState(null);

  const [closeHint, setCloseHint] = useState(false);

  const [isHintCreatedQuiz, setIsHintCreatedQuiz] = useState(0); // Potrzebne

  const [timeAfterHint, setTimeAfterHint] = useState(0);

  const [scoreBefore, setScoreBefore] = useState(0);
  const [open, setOpen] = useState(false);

  const finalScore = Math.floor((score / questions.length) * 100);
  const quizLength = Object.keys(quizzes).length;

  const [isHint, setIsHint] = useState(
    quizInformationFromCurrentUser[currentQuizNumber][currentQuestion]?.hint
  );

  useEffect(() => {
    result &&
      updateIsFirstOpenQuiz(
        currentUser.uid,
        currentClass,
        `Quiz ${currentQuizNumber}`
      );
  }, [result]);

  useEffect(() => {
    restartQuiz && setScoreBefore(finalResult);
  }, [restartQuiz]);

  useEffect(() => {
    if (finalResult <= 100) {
      if (finalScore === 0) {
        setGradeObtained(1);
      } else if (finalScore < 49) {
      } else if ((finalScore >= 50) & (finalScore <= 59)) {
        setGradeObtained(2);
      } else if ((finalScore >= 60) & (finalScore <= 74)) {
        setGradeObtained(3);
      } else if ((finalScore >= 75) & (finalScore <= 89)) {
        setGradeObtained(4);
      } else if ((finalScore >= 90) & (finalScore <= 100)) {
        setGradeObtained(5);
      }
    }
  }, [finalResult]);

  useEffect(() => {
    setIsHint(
      quizInformationFromCurrentUser[currentQuizNumber][currentQuestion]?.hint
    );
  }, [currentQuestion, quizInformationFromCurrentUser, currentQuizNumber]);

  useEffect(() => {
    currentQuestion === questions.length && setIsFirstOpen(true);
  }, [currentQuestion]);

  useEffect(() => {
    setBestTime((prev) => prev + Math.floor(endTime - startTime));
  }, [endTime]);

  useEffect(() => {
    updateUsedTimeQuizUser(
      currentUser.uid,
      currentClass,
      `Quiz ${currentQuizNumber}`,
      usedTime,
      bestTime
    );
  }, [bestTime]);

  useEffect(() => {
    updateGradeQuizUser(
      currentUser.uid,
      currentClass,
      `Quiz ${currentQuizNumber}`,
      gradeObtained
    );
  }, [gradeObtained]);

  useEffect(() => {
    if (currentQuestion === questions.length - 1) {
      updateFinalResultUser(
        currentUser.uid,
        currentClass,
        `Quiz ${currentQuizNumber}`,
        finalScore
      );
    }
  }, [finalScore]);

  useEffect(() => {
    if (
      (currentQuestion === questions.length - 1) &
      (finalScore === 100 || restartQuiz)
    ) {
      if (summaryQuiz[currentClass].bestTime >= bestTime) {
        updateBestTimeCurrentUserQuiz(currentUser.uid, currentClass, bestTime);
        updateGeneralBestTime(currentUser.uid, bestTime);
      } else if (summaryQuiz[currentClass].bestTime === 0) {
        updateBestTimeCurrentUserQuiz(currentUser.uid, currentClass, bestTime);
        updateGeneralBestTime(currentUser.uid, bestTime);
      }
    }
  }, [bestTime]);

  useEffect(() => {
    setCurrentQuiz(quizzes[quiz]);
  }, [quiz, quizzes]);

  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    setShuffledQuestions(shuffleArray(currentQuiz.questions));
  }, []);

  useEffect(() => {
    const question = shuffledQuestions.map((question) => {
      return question;
    });
    setQuestions(question);
  }, [shuffledQuestions]);

  useEffect(() => {
    setQuestion(questions[currentQuestion]);
  }, [questions, currentQuestion]);

  useEffect(() => {
    setPerformed(quizInformationFromCurrentUser[currentQuizNumber].performed);
  }, [currentQuizNumber]);

  useEffect(() => {
    setUsedTime(quizInformationFromCurrentUser[currentQuizNumber].usedTime);
  }, [currentQuizNumber]);

  useEffect(() => {
    setGradeObtained(quizInformationFromCurrentUser[currentQuizNumber].grade);
  }, [currentQuizNumber]);

  useEffect(() => {
    setPassed(quizInformationFromCurrentUser[currentQuizNumber].passed);
  }, [currentQuizNumber]);

  useEffect(() => {
    setMadeQuizzes(
      quizInformationFromCurrentUser[currentQuizNumber].madeQuizzes
    );
  }, [currentQuizNumber]);

  useEffect(() => {
    if (finalScore === 100) {
      updateCountPassedCurrentUserQuiz(
        currentUser.uid,
        currentClass,
        summaryQuiz[currentClass].passedQuizzes
      );
      updateCountPassedAllQuizzes(
        currentUser.uid,
        userGeneralStatistics[0].passedAllQuizzes
      );
    }
  }, [finalScore]);

  useEffect(() => {
    setFinalResult(
      quizInformationFromCurrentUser[currentQuizNumber].finalScore
    );
  }, [currentQuizNumber, quizInformationFromCurrentUser]);

  useEffect(() => {
    if (finalResult === 100) {
      setResult(true);
    }
  });

  useEffect(() => {
    if (showHint) {
      updadateCurrentQuestionHint(
        currentUser.uid,
        currentClass,
        `Quiz ${currentQuizNumber}`,
        currentQuestion
      );
    }
  }, [showHint]);

  useEffect(() => {
    if (result) {
      updadateCurrentQuestionHintAll(
        currentUser.uid,
        currentClass,
        `Quiz ${currentQuizNumber}`
      );
    }
  }, [result]);

  useEffect(() => {
    setStartTime(new Date().getTime() / 1000);
  }, []);

  console.log("timafterhint", timeAfterHint);

  useEffect(() => {
    if (open) {
      updateNumbersOfApproachesCurrentUserQuiz(
        currentUser.uid,
        currentClass,
        summaryQuiz[currentClass].numberOfApproaches
      );
    }
  }, [open]);

  useEffect(() => {
    if (!passed) {
      updateMadeQuizzesCurrentUserQuiz(
        currentUser.uid,
        currentClass,
        summaryQuiz[currentClass].madeQuizzes
      );
    }
  }, [passed]);

  useEffect(() => {
    setScore(score);
  }, [score]);

  useEffect(() => {
    score > 0 && setScore(score - timeAfterHint / 100);
  }, [currentQuestion, closeHint]);

  return (
    <div className="quiz-container">
      <div className="quiz-box">
        {!result & !performed ? (
          !showHint ? (
            question && (
              <CurrentQuizBox
                question={question}
                currentQuestion={currentQuestion}
                currentQuizNumber={currentQuizNumber}
                questions={questions}
                setCurrentQuestion={setCurrentQuestion}
                setResult={setResult}
                setScore={setScore}
                performed={performed}
                currentClass={currentClass}
                setStartTime={setStartTime}
                setIsFirstOpen={setIsFirstOpen}
                setShowHint={setShowHint}
                setCloseHint={setCloseHint}
                showHint={showHint}
                isHint={isHint}
                setCurrentAnswer={setCurrentAnswer}
                setOpen={setOpen}
                setIsHintCreatedQuiz={setIsHintCreatedQuiz}
                score={score}
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
            finalResult={finalResult}
            setResult={setResult}
            setCurrentQuestion={setCurrentQuestion}
            setScore={setScore}
            currentQuizNumber={currentQuizNumber}
            currentClass={currentClass}
            performed={performed}
            restartQuiz={restartQuiz}
            setRestartQuiz={setRestartQuiz}
            setEndTime={setEndTime}
            quizLength={quizLength}
            isFirstOpen={isFirstOpen}
            setIsFirstOpen={setIsFirstOpen}
            bestTime={bestTime}
            setPerformed={setPerformed}
            grade={gradeObtained}
            gradeObtained={gradeObtained}
            scoreBefore={scoreBefore}
            setOpen={setOpen}
          />
        )}
      </div>
      {!result & !performed & !showHint ? (
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
          currentAnswer={currentAnswer}
          setCloseHint={setCloseHint}
          isHint={isHint}
          setShowHint={setShowHint}
          setOpen={setOpen}
          setTimeAfterHint={setTimeAfterHint}
          setIsHintCreatedQuiz={setIsHintCreatedQuiz}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Quiz;
