import {
  useAuth,
  removeFromCart,
  addToWishlist,
  changeItemQuantity,
} from "../../Helper";
import "./CardHorizontal.css";

const CardHorizontal = ({ product }) => {
  const { userState, dispatchUserState, inWishlist } = useAuth();

  const itemQuantityHandler = (e) => {
    changeItemQuantity(
      product._id,
      userState.token,
      dispatchUserState,
      e.target.value
    );
  };

  const removeCartItemHandler = () => {
    removeFromCart(product._id, userState.token, dispatchUserState);
  };

  const addToWishListHandler = () => {
    removeFromCart(product._id, userState.token, dispatchUserState);
    !inWishlist(product._id) &&
      addToWishlist(product, userState.token, dispatchUserState);
  };

  return (
    <div className="card card_horizontal mb_4 mx_auto">
      <div className="container_top">
        <div className="img_card">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="heading_card">
          <h4 className="h4 gray_title mb_2">{product.name}</h4>
          <h5 className="h4 inline gray_subtitle mt_5">{`₹ ${
            product.price.split(".")[0]
          }`}</h5>
          <div className="card_amount flex_justify__end">
            <select
              className="input"
              onChange={(e) => itemQuantityHandler(e)}
              value={product.qty}>
              {[...Array(product.inStock)].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="container_bottom flex_col">
        <div className="card_actions flex_row flex_align__center">
          <div className="action_buttons">
            <button
              className="btn btn_primary btn_sm"
              onClick={() => removeCartItemHandler()}>
              Remove from cart
            </button>
          </div>
          <div className="action_icons">
            <button onClick={() => addToWishListHandler()}>
              <span className="material-icons outlined icon">
                favorite_border
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardHorizontal };
