import { useNavigate } from "react-router-dom";

import "./category-menu.styles.css";

const CategoryMenu = ({ category }) => {
  const { name, img, alt, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <div className="category-box" onClick={onNavigateHandler}>
      <img src={img} alt={alt} className="category-box-img" />
      <h1 className="category-box-title">{name}</h1>
    </div>
  );
};

export default CategoryMenu;
