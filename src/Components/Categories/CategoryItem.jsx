import axios from "axios";
import { useEffect } from "react";
import "./CategoryItem.css";
import { useData } from "../../Helper/";

const CategoryItem = () => {
  const {
    state: { categories },
    dispatch,
  } = useData();

  const fetchCategories = async () => {
    try {
      const categoriesData = await axios.get("/api/categories");
      dispatch({ type: "CATEGORIES", payload: categoriesData.data.categories });
      console.log(categoriesData.data.categories);
    } catch (error) {
      console.error(error);
    } finally {
      console.log(categories);
    }
  };

  useEffect(() => {
    if (categories.length === 0) fetchCategories();
  }, []);

  console.log(categories);

  return (
    <div className="category_items flex">
      {categories.map((categoryItem) => (
        <div className="category_product" key={categoryItem.id}>
          <img
            src={categoryItem.image}
            alt="Earphones"
            className="category_product__image"
          />
          <div className="overlay flex_justify__center flex_align__center">
            <h3 className="h3">{categoryItem.categoryName}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CategoryItem };
