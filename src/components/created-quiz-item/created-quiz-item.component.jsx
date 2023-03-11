import { useNavigate } from "react-router-dom";
import { deleteCreatedQuiz } from "../../utils/firebase/firebase.utils";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../button/button.component";
import "./created-quiz-item.styles.css";
import close from "./close.png";

const CreatedQuizItem = ({ createdQuiz }) => {
  const navigate = useNavigate();
  const gotoQuizHandler = (e, quiz) => navigate(quiz.quizName);

  const deleteQuizHandler = async () => {
    await deleteCreatedQuiz(createdQuiz.quizName);
    toast.success("Quiz został usunięty", {
      position: "top-center",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };
  return (
    <div className="created-quiz-item-box">
      <p className="created-quiz-name">{createdQuiz.quizName}</p>
      <Button
        buttonType="secondary"
        onClick={(e) => gotoQuizHandler(e, createdQuiz)}
      >
        Rozpocznij Quiz
      </Button>
      <div onClick={deleteQuizHandler}>
        <img src={close} alt="Kryżyk" className="close-btn" />
      </div>
    </div>
  );
};

export default CreatedQuizItem;
