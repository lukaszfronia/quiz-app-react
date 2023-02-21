import { useState, useEffect } from "react";

const CurrentQuiz = ({ quiz }) => {
  //   const [question, setQuestion] = useState("");

  //   useEffect(() => {
  //     setQuestion(quiz[0]);
  //   }, [quiz]);
  //   console.log(quiz.question);
  return (
    // <div>{quiz.question}</div>
    <>
      <div>{quiz.question}</div>;
      <div>
        {quiz.answer.map((a) => (
          <h1>{a.text}</h1>
        ))}
      </div>
    </>
  );
};

export default CurrentQuiz;
