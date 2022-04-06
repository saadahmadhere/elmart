import { useContext, createContext, useReducer } from "react";
import { filterReducer } from "../";
import {
  sortBy,
  inStock,
  rating,
  priceRange,
  filterByCategory,
} from "../../Utility/filters";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const initial = {
  products: [],
  filters: {
    sort: null,
    inStock: 0,
    rating: 0,
    priceRange: 100000,
    categories: [],
  },
};

const FilterContextProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initial);

  const getFilteredData =
    (...func) =>
    (state, data) =>
      func.reduce((acc, curr) => curr(state, acc), data);

  const filteredData = getFilteredData(
    sortBy,
    inStock,
    rating,
    priceRange,
    filterByCategory
  )(filterState.filters, filterState.products);

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, filteredData }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContextProvider, useFilter };
