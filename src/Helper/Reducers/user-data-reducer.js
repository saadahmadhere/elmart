const userDataReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("token", action.payload.encodedToken);
      localStorage.setItem(
        "userState",
        JSON.stringify(action.payload.foundUser)
      );
      return {
        ...state,
        token: action.payload.encodedToken,
        userData: action.payload.foundUser,
      };
    }
    case "LOGOUT": {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      return {
        token: null,
        userData: {},
      };
    }
    case "SIGNUP": {
      localStorage.setItem("token", action.payload.encodedToken);
      localStorage.setItem(
        "userState",
        JSON.stringify(action.payload.createdUser)
      );
      return {
        ...state,
        token: action.payload.encodedToken,
        userData: action.payload.createdUser,
      };
    }
    case "ADD_TO_CART": {
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...state.userData, cart: action.payload })
      );
      return {
        ...state,
        userData: { ...state.userData, cart: action.payload },
      };
    }
    case "REMOVE_FROM_CART": {
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...state.userData, cart: action.payload })
      );
      return {
        ...state,
        userData: { ...state.userData, cart: action.payload },
      };
    }
    case "ADD_TO_WISHLIST": {
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...state.userData, wishlist: action.payload })
      );
      return {
        ...state,
        userData: { ...state.userData, wishlist: action.payload },
      };
    }
    case "REMOVE_FROM_WISHLIST": {
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...state.userData, wishlist: action.payload })
      );
      return {
        ...state,
        userData: { ...state.userData, wishlist: action.payload },
      };
    }
    case "CHANGE_ITEM_QUANTITY": {
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...state.userData, cart: action.payload })
      );
      return {
        ...state,
        userData: { ...state.userData, cart: action.payload },
      };
    }
  }
};

export { userDataReducer };
