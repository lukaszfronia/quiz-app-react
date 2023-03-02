import categoryimg1 from "./kit-gd04b1c07e_1280.png";
import categoryimg2 from "./school-g926b41339_1280.png";
import categoryimg3 from "./school-g613556511_1280.png";

import CategoryMenu from "../../components/category-menu/category-menu.component";

import "./category-preview.styles.css";
import BackButton from "../../components/button/back-button.conponent";

import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Klasa 1 - 3",
    img: categoryimg1,
    alt: "kredki",
    route: "klasa13",
  },
  {
    id: 2,
    name: "Klasa 4 - 8",
    img: categoryimg2,
    alt: "olowek, linijka",
    route: "klasa48",
  },
  {
    id: 3,
    name: "Tech - Liceum",
    img: categoryimg3,
    alt: "kalkulator",
    route: "technikum_liceum",
  },
];

const CategoryPreview = () => {
  const navigate = useNavigate();
  const backToPreviousPage = () => {
    navigate("../");
  };
  return (
    <>
      <div className="category-container">
        <div className="category-box-name">
          <BackButton onClick={backToPreviousPage} />
          <h1 className="name">Wybierz kategorie:</h1>
        </div>
        <div className="categories-box">
          {categories.map((category) => {
            return <CategoryMenu key={category.id} category={category} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryPreview;
