import "./quiz-category.styles.css";

const QuizCategory = ({ title, i }) => {
  return <div className="quiz-category-box">{title.slice(0, 5) + i}</div>;
};

export default QuizCategory;
