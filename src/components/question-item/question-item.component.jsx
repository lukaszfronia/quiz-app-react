import "./question-item.styles.css";
import { useEffect, useState } from "react";
import nextQuestion from "../../helper/nextQuestionFunc";

const QuestionItem = ({
  question,
  answer,
  currentQuestion,
  questions,
  setCurrentQuestion,
  setResult,
  isHint,
  setScore,
  setShowHint,
  setCloseHint,
  setEndAfterHint,
}) => {
  const [nextQuest, setNextQuest] = useState(false);

  const nextQuestionHandler = (e, answer) => {
    return nextQuestion(
      currentQuestion,
      questions,
      setCurrentQuestion,
      setResult,
      answer,
      setScore,
      setShowHint,
      isHint,
      setCloseHint,
      setEndAfterHint
    );
    // console.log("Z funkcji: ", timeAfterHint);

    ////////////////////////////TRUE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    // if ((answer?.correct === true) & isHint) {
    //   if (currentQuestion + 1 < questions.length) {
    //     setNextQuest(true);
    //     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    //   } else {
    //     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    //     setResult(true);
    //   }
    // }
    // if (isHint & (answer?.correct === false)) {
    //   setShowHint(true);
    //   setCurrentQuestion(currentQuestion);
    //   setCloseHint(false);
    // }

    // // /////////////////////////////FALSE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    // if (!isHint & (answer?.correct === false)) {
    //   if (currentQuestion + 1 < questions.length) {
    //     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    //     setEndAfterHint(new Date().getTime() / 1000);
    //     setNextQuest(true);
    //   } else {
    //     setResult(true);
    //     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    //     setEndAfterHint(new Date().getTime() / 1000);
    //   }
    // }
    // if (!isHint & (answer?.correct === true)) {
    //   setScore((prevScore) => prevScore + answer.score);
    //   if (currentQuestion + 1 < questions.length) {
    //     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    //     setEndAfterHint(new Date().getTime() / 1000);
    //     setNextQuest(true);
    //   } else {
    //     setResult(true);
    //     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    //     setEndAfterHint(new Date().getTime() / 1000);
    //   }
    // }
  };

  // useEffect(() => {
  //   if (nextQuest) {
  //     if ((answer?.correct === true) & isHint) {
  //       setScore((prevScore) => prevScore + answer.score);
  //       setNextQuest(false);
  //     }
  //     if (!isHint & (answer?.correct === false)) {
  //       setScore((prevScore) => prevScore - 0);
  //       setNextQuest(false);
  //     }
  //     if (!isHint & (answer?.correct === true)) {
  //       console.log("czy tu wchodze");
  //       setScore(answer.score + 1);
  //       setNextQuest(false);
  //     }
  //   }
  // }, [nextQuest]);

  return (
    <div
      key={Math.floor(Math.random() * 10000)}
      className="quiz-answer-box"
      onClick={(e) => {
        nextQuestionHandler(e, answer);
      }}
    >
      {answer.text}
    </div>
  );
};

export default QuestionItem;
