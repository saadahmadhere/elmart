import axios from "axios";

const signup = async (
  email,
  password,
  firstName,
  lastName,
  dispatch,
  navigate,
  setError
) => {
  try {
    const res = await axios.post("/api/auth/signup", {
      email,
      password,
      firstName,
      lastName,
    });
    if (res.status === 201) {
      dispatch({ type: "SIGNUP", payload: res.data });
      navigate("/");
    }
  } catch (error) {
    setError(error);
    console.error(error);
  }
};

const login = async (
  email,
  password,
  dispatch,
  navigate,
  toPreviousRoute,
  setError
) => {
  try {
    const res = await axios.post("/api/auth/login", { email, password });
    if (res.status === 200) {
      dispatch({ type: "LOGIN", payload: res.data });
      navigate(toPreviousRoute);
    } else {
      setError(true);
    }
  } catch (error) {
    console.error(error);
    setError(true);
  }
};

const addToCart = async (product, token, dispatch, setLoader) => {
  try {
    setLoader(true);
    const res = await axios.post(
      "/api/user/cart",
      { product },
      { headers: { authorization: token } }
    );
    dispatch({ type: "ADD_TO_CART", payload: res.data.cart });
  } catch (error) {
    console.error(error);
  } finally {
    setLoader(false);
  }
};

const removeFromCart = async (productId, token, dispatch) => {
  try {
    const res = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: token },
    });
    dispatch({ type: "REMOVE_FROM_CART", payload: res.data.cart });
  } catch (error) {
    console.error(error);
  }
};

const addToWishlist = async (product, token, dispatch) => {
  try {
    const res = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers: { authorization: token } }
    );
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: res.data.wishlist,
    });
  } catch (error) {
    console.error(error);
  }
};

const removeFromWishlist = async (productId, token, dispatch) => {
  try {
    const res = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: { authorization: token },
    });
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: res.data.wishlist,
    });
  } catch (error) {
    console.error(error);
  }
};

const changeItemQuantity = async (productId, token, dispatch, quantity) => {
  try {
    (async () => {
      const res = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: "increment",
            payload: Number(quantity),
          },
        },
        { headers: { authorization: token } }
      );
      dispatch({
        type: "CHANGE_ITEM_QUANTITY",
        payload: res.data.cart,
      });
    })();
  } catch (error) {
    console.error(error);
  }
};

const getProduct = (productId, setLoading, setProduct) => {
  (async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/products/${productId}`);
      setProduct(res.data.product);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  })();
};

export {
  login,
  signup,
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  changeItemQuantity,
  getProduct,
};
