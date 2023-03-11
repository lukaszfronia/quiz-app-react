import CreateQuizForm from "../../components/create-quiz-form/create-quiz-form.component";
import { ToastContainer, toast } from "react-toastify";
import "./create-quiz-preview.styles.css";
import CreatedQuizzes from "../../components/created-quizzes/created-quizzes.component";

const CreateQuizPreview = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
      <div className="create-quiz-preview-container">
        <CreateQuizForm />

        <CreatedQuizzes />
      </div>
    </>
  );
};
export default CreateQuizPreview;
