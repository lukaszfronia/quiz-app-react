import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../category-preview/category-preview";
import CategoryClass from "../category-class/category-class";

const Category = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":currentClass/*" element={<CategoryClass />} />
    </Routes>
  );
};

export default Category;
