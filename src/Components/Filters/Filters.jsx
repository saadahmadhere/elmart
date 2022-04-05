import { useFilter } from "../../Helper";
import "./Filters.css";
import { RatingFilter } from "./RatingFilter";

const Filters = () => {
  const {
    filterState: {
      filters: { sort, priceRange, categories, inStock },
    },
    filterDispatch,
  } = useFilter();

  const clearFilterHandler = () => {
    filterDispatch({ type: "CLEAR_FILTERS" });
  };

  const priceHandler = (e) => {
    filterDispatch({
      type: "FILTER_BY_PRICE_RANGE",
      payload: e.target.value,
    });
  };

  const highToLowHandler = () => {
    filterDispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" });
  };

  const lowToHighHandler = () => {
    filterDispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" });
  };

  const availabilityHandler = () => filterDispatch({ type: "FILTER_BY_STOCK" });

  return (
    <aside className="aside">
      <div className="filter flex_align__center">
        <h3 className="h3 txt_bold gray_title">Filters</h3>
        <button className="btn btn_outline btn_sm" onClick={clearFilterHandler}>
          Clear
        </button>
      </div>

      <div className="price">
        <h4 className="h4 gray_title">Price</h4>
        <input
          type="range"
          className="range_slider"
          step="10000"
          min="0"
          max="100000"
          value={priceRange}
          onChange={priceHandler}
        />
        <div>{`INR 0-${priceRange}`}</div>
      </div>

      <div className="category">
        <h4 className="h4 gray_title mb_4">Categories</h4>
        <div className="category_item">
          <input
            type="checkbox"
            name="category"
            id="earphones"
            onChange={() =>
              filterDispatch({ type: "CATEGORY", payload: "ear phones" })
            }
            checked={categories.includes("ear phones")}
          />
          <label htmlFor="earphones" className="">
            Earphones
          </label>
        </div>
        <div className="category_item">
          <label>
            <input
              type="checkbox"
              name="category"
              id="mobile_phones"
              onChange={() =>
                filterDispatch({ type: "CATEGORY", payload: "mobile phones" })
              }
              checked={categories.includes("mobile phones")}
            />
            Mobile Phones
          </label>
        </div>
        <div className="category_item">
          <label>
            <input
              type="checkbox"
              name="category"
              onChange={() =>
                filterDispatch({ type: "CATEGORY", payload: "keyboards" })
              }
              checked={categories.includes("keyboards")}
            />
            Keyboards
          </label>
        </div>
        <div className="category_item">
          <label>
            <input
              type="checkbox"
              name="category"
              onChange={() =>
                filterDispatch({ type: "CATEGORY", payload: "tablets" })
              }
              checked={categories.includes("tablets")}
            />
            Tablets
          </label>
        </div>
      </div>

      <div className="rating">
        <h4 className="h4 gray_title mb_4">Rating</h4>
        <RatingFilter />
        <span> & more</span>
      </div>

      <div className="sort">
        <h4 className="h4 gray_title mb_4">Sort by Price</h4>
        <div className="sort_item">
          <label>
            <input
              type="radio"
              name="sort"
              className="mr_1"
              onChange={highToLowHandler}
              checked={sort === "HIGH_TO_LOW"}
            />
            High to Low
          </label>
        </div>
        <div className="sort_item mb_4">
          <label>
            <input
              type="radio"
              name="sort"
              className="mr_1"
              onChange={lowToHighHandler}
              checked={sort === "LOW_TO_HIGH"}
            />
            Low to High
          </label>
        </div>
      </div>
      <div className="availability">
        <h4 className="h4 gray_title mb_4">Availability</h4>
        <label>
          <input
            type="checkbox"
            name="category"
            onChange={availabilityHandler}
            checked={inStock}
          />
          Include out of stocks
        </label>
      </div>
    </aside>
  );
};

export { Filters };
