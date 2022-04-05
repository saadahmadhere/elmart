const sortBy = (state, data) => {
  switch (state.sort) {
    case "HIGH_TO_LOW":
      return [...data].sort((a, b) => b.price - a.price);
    case "LOW_TO_HIGH":
      return [...data].sort((a, b) => a.price - b.price);
    default:
      return data;
  }
};

const filterByCategory = (state, data) => {
  if (state.categories.length === 0) {
    return data;
  }
  return [...data].filter((item) =>
    state.categories.includes(item.categoryName.toLowerCase())
  );
};

const inStock = (state, data) =>
  !state.inStock ? [...data].filter((item) => item.inStock) : data;

const rating = (state, data) => {
  return state.rating === null
    ? data
    : [...data].filter((item) => {
        return Number(item.ratings) >= Number(state.rating);
      });
};

const priceRange = (state, data) => {
  return [...data].filter((item) => Number(item.price) <= state.priceRange);
};

export { sortBy, inStock, rating, priceRange, filterByCategory };
