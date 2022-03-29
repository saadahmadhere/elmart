import { useContext, createContext, useReducer } from "react";

const ProductDataContext = createContext();
const useData = () => useContext(ProductDataContext);

const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS":
      return { ...state, products: action.payload };

    case "CATEGORIES":
      return { ...state, categories: action.payload };

    default:
      return state;
  }
};

const initialState = { products: [], categories: [] };

const ProductDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductDataContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductDataContext.Provider>
  );
};

export { ProductDataProvider, useData };
