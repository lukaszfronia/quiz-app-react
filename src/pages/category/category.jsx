import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../category-preview/category-preview";

const Category = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
    </Routes>
  );
};

export default Category;
