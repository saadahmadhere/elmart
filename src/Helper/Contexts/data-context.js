import { useContext, createContext, useReducer } from "react";

const ProductDataContext = createContext();
const useData = () => useContext(ProductDataContext);

const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS":
      return { ...state, products: action.payload };

    case "CATEGORIES":
      return { ...state, categories: action.payload };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "CHANGE_ITEM_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((cartItem) =>
          cartItem.id === action.payload.id
            ? (cartItem.qty = +action.payload.qty)
            : +cartItem.qty
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem._id !== action.payload),
      };

    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

const initialState = { products: [], categories: [], cart: [], wishlist: [] };

const ProductDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductDataContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductDataContext.Provider>
  );
};

export { ProductDataProvider, useData };
