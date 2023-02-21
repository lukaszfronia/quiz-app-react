import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../category-preview/category-preview";
import Klasa from "../klasa/klasa";

const Category = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":klasa/*" element={<Klasa />} />
    </Routes>
  );
};

export default Category;
