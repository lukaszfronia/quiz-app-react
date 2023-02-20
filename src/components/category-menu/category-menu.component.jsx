import { useNavigate } from "react-router-dom";
import { useContext, Fragment } from "react";

import { QuizContext } from "../../context/quiz.context";

import "./category-menu.styles.css";

const CategoryMenu = ({ category }) => {
  let { collection, setCollection } = useContext(QuizContext);

  const { name, img, alt, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(name);
    setCollection((collection = name));
  };

  return (
    <div className="category-box" onClick={onNavigateHandler}>
      <img src={img} alt={alt} className="category-box-img" />
      <h1 className="category-box-title">{name}</h1>
    </div>
  );
};

export default CategoryMenu;
