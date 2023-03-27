import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addCreatedQuizzesToDatabase } from "../../utils/firebase/firebase.utils";
import { AuthContext } from "../../context/auth.context";
import Button from "../button/button.component";

import "./create-quiz-form.styles.css";

const CreateQuizForm = () => {
  const { currentUser } = useContext(AuthContext);

  const [quizName, setQuizName] = useState("");
  const [question, setQuestion] = useState("");
  const [hint, setHint] = useState("");
  const [uid, setUid] = useState(currentUser?.uid);

  useEffect(() => {
    setUid(currentUser?.uid || "");
  }, []);

  const [answers, setAnswers] = useState([
    { text: "", correct: true },
    { text: "", correct: false },
    { text: "", correct: false },
    { text: "", correct: false },
  ]);
  const [createQuizData, setCreateQuizData] = useState({
    quizName: "",
    uid: "",
    questions: [],
  });
  const [questionCount, setQuestionCount] = useState(0);

  const isExactlyOneAnswerCorrect = () => {
    const correctAnswers = answers.filter((answer) => answer.correct);
    return correctAnswers.length === 1;
  };

  const isNotEmpty = (value) => {
    return value.trim() !== "";
  };
  const handleAddQuestion = () => {
    if (!isExactlyOneAnswerCorrect()) {
      toast.warn("Wybierz tylko jedną poprawną odpowiedź", {
        position: "top-center",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    if (!isNotEmpty(question)) {
      toast.warn("Prosze podać pytanie", {
        position: "top-center",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    let allAnswersNotEmpty = true;
    answers.forEach((answer) => {
      if (!isNotEmpty(answer.text)) {
        allAnswersNotEmpty = false;
      }
    });
    if (!allAnswersNotEmpty) {
      toast.warn("Proszę wprowadzić wszystkie odpowiedzi", {
        position: "top-center",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    const newQuestion = { question, answers, hint };
    const newQuestions = [...createQuizData.questions, newQuestion];
    setCreateQuizData({
      ...createQuizData,
      quizName: quizName.trim(),
      uid: uid,
      questions: newQuestions,
    });

    setQuestion("");
    setAnswers([
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ]);
    setHint("");
    setQuestionCount(questionCount + 1);
    toast.success("Dodano pytanie", {
      position: "top-center",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };

  const handleReset = async () => {
    if (createQuizData.questions.length > 0) {
      setQuizName("");
      setQuestion("");
      setAnswers([
        { text: "", correct: true },
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: false },
      ]);
      setHint("");
      setCreateQuizData({
        quizName: "",
        uid: "",
        questions: [],
      });
      setQuestionCount(0);

      try {
        await addCreatedQuizzesToDatabase(createQuizData);
        toast.success("Stworzono Quiz", {
          position: "top-center",
          autoClose: true,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Nie można stworzyć quizu bez żadnego stworzonego pytania!", {
        position: "top-center",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
    }
  };
  return (
    <div className="create-quiz-container">
      <div>
        <h1>Stwórz własny Quiz!</h1>
      </div>
      <div className="create-quiz-box">
        <div className="create-quiz-form-box">
          <div className="quiz-name-box">
            <input
              className="input-create-quiz"
              type="text"
              placeholder="Nazwa Quizu"
              value={quizName}
              onChange={(e) => setQuizName(e.target.value)}
            />
            <p className="add-questions-count">
              Dodane pytania: {questionCount}
            </p>
          </div>
          <div className="question-hint-box">
            <textarea
              className="input-create-quiz-large"
              type="text"
              placeholder="Pytanie..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <textarea
              className="input-create-quiz-large"
              type="text"
              placeholder="Podpowiedź jak rozwiązać podane pytanie..."
              value={hint}
              onChange={(e) => setHint(e.target.value)}
            />
          </div>
          <div className="answer-container">
            {answers.map((answer, index) => (
              <div className="answer-box" key={index}>
                <input
                  className="input-create-quiz-small"
                  type="text"
                  placeholder={`Odpowiedź ${index + 1}`}
                  value={answer.text}
                  onChange={(e) => {
                    const newAnswers = [...answers];
                    newAnswers[index] = { ...answer, text: e.target.value };
                    setAnswers(newAnswers);
                  }}
                />
                <div className="radio-box">
                  <input
                    type="radio"
                    name="correct-answer"
                    checked={answer.correct}
                    onChange={(e) => {
                      const newAnswers = [...answers].map((a) => ({
                        ...a,
                        correct: false,
                      }));
                      newAnswers[index] = { ...answer, correct: true };
                      setAnswers(newAnswers);
                    }}
                  />
                  <label>Poprawna</label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="btns-box">
          <Button buttonType="secondary" onClick={handleAddQuestion}>
            Dodaj pytanie
          </Button>
          <Button buttonType="secondary" onClick={handleReset}>
            Zapisz Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuizForm;
