import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryItem.css";
import { useFilter, Loader } from "../../Helper";

const CategoryItem = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(false);
  const { filterDispatch } = useFilter();

  const fetchCategories = async () => {
    try {
      setLoader(true);
      const categoriesData = await axios.get("/api/categories");
      if (categoriesData.status === 200) {
        setCategories(categoriesData.data.categories);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (categories?.length === 0) fetchCategories();
  }, []);

  return (
    <div className="category_items flex">
      {loader ? (
        <Loader />
      ) : (
        categories?.map((categoryItem) => (
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
