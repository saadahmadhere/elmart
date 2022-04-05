const filterReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS":
      return { ...state, products: action.payload };

    case "FILTER_BY_PRICE_RANGE":
      return {
        ...state,
        filters: { ...state.filters, priceRange: action.payload },
      };

    case "SORT_BY_PRICE":
      return { ...state, filters: { ...state.filters, sort: action.payload } };

    case "FILTER_BY_STOCK":
      return {
        ...state,
        filters: { ...state.filters, inStock: !state.filters.inStock },
      };

    case "FILTER_BY_RATING":
      return {
        ...state,
        filters: { ...state.filters, rating: action.payload },
      };

    case "CATEGORY":
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: state.filters.categories.includes(action.payload)
            ? state.filters.categories.filter(
                (category) => category !== action.payload
              )
            : [...state.filters.categories, action.payload],
        },
      };

    case "SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          sort: null,
          inStock: 0,
          rating: 0,
          priceRange: 100000,
          categories: [],
        },
      };

    default:
      return state;
  }
};

export { filterReducer };
