import { useState } from "react";
import { useFilter, useFixSidebarOverflow } from "../../Helper";
import "./Filters.css";
import { RatingFilter } from "./RatingFilter";

const Filters = () => {
  const [showFiltersBar, setShowFiltersBar] = useState(false);
  useFixSidebarOverflow(showFiltersBar);
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
        {!showFiltersBar ? (
          <button
            className=" txt_regular btn btn_primary py_3 px_4"
            onClick={() => setShowFiltersBar(true)}>
            <i className="fas fa-filter mr_1"></i>
            Filters
          </button>
        ) : (
          <button
            className=" txt_regular btn btn_primary py_3 px_4"
            onClick={() => setShowFiltersBar(false)}>
            Apply Filters
          </button>
        )}

        <button className="btn btn_outline btn_sm" onClick={clearFilterHandler}>
          Clear
        </button>
      </div>

      <div className={showFiltersBar ? "showFilters" : "hideFilters"}>
        <div className="price">
          <h4 className="h4 gray_title">Price</h4>
          <input
            type="range"
            className="range_slider"
            step="10000"
            min="10000"
            max="100000"
            value={priceRange}
            onChange={priceHandler}
            style={{ width: "100%" }}
          />
          <div>{`INR 0-${priceRange}`}</div>
        </div>

        <div className="category mb_8">
          <h4 className="h4 gray_title mb_2">Categories</h4>
          <div className="category_item">
            <label>
              <input
                type="checkbox"
                name="category"
                id="earphones"
                onChange={(e) =>
                  filterDispatch({
                    type: "CATEGORY",
                    payload: "ear phones",
                  })
                }
                checked={categories.includes("ear phones")}
              />
              Ear Phones
            </label>
          </div>
          <div className="category_item">
            <label>
              <input
                type="checkbox"
                name="category"
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

        <div className="rating mb_8">
          <h4 className="h4 gray_title mb_2">Rating</h4>
          <RatingFilter />
          <span> & more</span>
        </div>

        <div className="sort mb_8">
          <h4 className="h4 gray_title mb_2">Sort by Price</h4>
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

        <div className="availability mb_8">
          <h4 className="h4 gray_title mb_2">Availability</h4>
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
      </div>
    </aside>
  );
};

export { Filters };
