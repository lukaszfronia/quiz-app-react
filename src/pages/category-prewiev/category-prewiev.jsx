import categoryimg1 from "./kit-gd04b1c07e_1280.png";
import categoryimg2 from "./school-g926b41339_1280.png";
import categoryimg3 from "./school-g613556511_1280.png";

import "./category-prewiev.style.css";

const CategoryPrewiev = () => {
  return (
    <>
      <div className="category-preview-container">
        <div className="category-preview-box-name">
          <h1 className="name">Wybierz kategorie:</h1>
        </div>
        <div className="category-preview-box">
          <img
            src={categoryimg1}
            alt="kredki"
            className="category-preview-box-img"
          />
          <h1 className="category-preview-box-title">Klasa 1 - 3</h1>
        </div>
        <div className="category-preview-box">
          <img
            src={categoryimg2}
            alt="ołówek gumka długopis"
            className="category-preview-box-img"
          />
          <h1 className="category-preview-box-title">Klasa 4 - 8</h1>
        </div>
        <div className="category-preview-box">
          <img
            src={categoryimg3}
            alt="kalkulator"
            className="category-preview-box-img"
          />
          <h1 className="category-preview-box-title">Tech - Liceum </h1>
        </div>
      </div>
    </>
  );
};

export default CategoryPrewiev;
