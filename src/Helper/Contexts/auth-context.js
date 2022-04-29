import { createContext, useContext, useReducer } from "react";
import { userDataReducer } from "../Reducers/user-data-reducer";
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [userState, dispatchUserState] = useReducer(userDataReducer, {
    token: localStorage.getItem("token"),
    userData: JSON.parse(localStorage.getItem("userData")) ?? {
      cart: [],
      wishlist: [],
    },
  });

  const inCart = (id) =>
    userState?.userData?.cart?.find((cartItem) => cartItem._id === id);
  const inWishlist = (id) =>
    userState?.userData?.wishlist?.find((wishlist) => wishlist._id === id);

  return (
    <AuthContext.Provider
      value={{ userState, dispatchUserState, inCart, inWishlist }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
