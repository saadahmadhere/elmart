import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryItem.css";
import { useData } from "../../Helper/";
import { useFilter } from "../../Helper";

const CategoryItem = () => {
  const navigate = useNavigate();

  const {
    state: { categories },
    dispatch,
  } = useData();

  const { filterDispatch } = useFilter();

  const fetchCategories = async () => {
    try {
      const categoriesData = await axios.get("/api/categories");
      if (categoriesData.status === 200) {
        dispatch({
          type: "CATEGORIES",
          payload: categoriesData.data.categories,
        });
      }
    } catch (error) {
      dispatch({
        type: "CATEGORIES",
        payload: null,
      });
      console.error(error);
    }
  };

  useEffect(() => {
    if (categories?.length === 0) fetchCategories();
  }, []);

  return (
    <div className="category_items flex">
      {categories === null ? (
        <h2 style={{ color: "red" }}>Problem loading categories ...</h2>
      ) : (
        categories.map((categoryItem) => (
          <div
            className="category_product"
            key={categoryItem._id}
            onClick={() => {
              filterDispatch({
                type: "CATEGORY",
                payload: categoryItem.categoryName.toLowerCase(),
              });
              navigate("/productListing");
            }}>
            <img
              src={categoryItem.image}
              alt={categoryItem.categoryName}
              className="category_product__image"
            />
            <div className="overlay flex_justify__center flex_align__center">
              <h3 className="h3">{categoryItem.categoryName}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export { CategoryItem };
