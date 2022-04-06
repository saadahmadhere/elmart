import "./Categories.css";
import { CategoryItem } from "./CategoryItem";

const Categories = () => {
  return (
    <section className="categories flex_col flex_align__center mb_10">
      <h1 className="h1 txt_center mt_10">Featured Categories</h1>
      <hr className="hr mb_10 mt_4" />
      <CategoryItem />
    </section>
  );
};

export { Categories };
