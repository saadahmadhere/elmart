import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Rating } from "./Rating";
import {
  useAuth,
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../Helper";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const { userState, dispatchUserState, inWishlist, inCart } = useAuth();
  const [loader, setLoader] = useState(false);

  const addToCartHandler = () => {
    userState.token
      ? addToCart(product, userState.token, dispatchUserState, setLoader)
      : navigate("/login");
  };

  const addToWishListHandler = () => {
    userState.token
      ? addToWishlist(product, userState.token, dispatchUserState)
      : navigate("/login");
  };

  const removeFromWishlistHandler = () => {
    removeFromWishlist(product._id, userState.token, dispatchUserState);
  };

  return (
    <div className={`card card_w_badge ${!product.inStock && "card_overlay"}`}>
      <div className="container_top">
        {!product.inStock && (
          <div className="overlay_div">
            <div className="overlay_text">
              <h2 className="h2">Out Of Stock</h2>
            </div>
          </div>
        )}
        <Link to={`/singleProduct/${product._id}`}>
          <div className="img_card">
            <img
              src={product.image}
              alt={product.name}
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
        <div className="heading_card">
          <h4 className="h4 gray_title mb_2">{product.name}</h4>
          <h5 className="h5 gray_subtitle mb_4">{product.brand}</h5>
          <Rating reviews={product.reviews} ratings={product.ratings} />
        </div>
        <div className="description flex_align__center">
          <p className="h3 txt_semibold">{`₹ ${
            product.price.split(".")[0]
          }`}</p>
          {product.fastDelivery && (
            <div style={{ display: "block" }}>Fast delivery</div>
          )}
        </div>
      </div>
      <div className="container_bottom">
        <div className="action_buttons">
          {!inCart(product._id) ? (
            <button
              onClick={() => addToCartHandler()}
              className="btn btn_primary btn_sm">
              {loader ? (
                <i className="fas fa-spinner fa-spin mr_1"></i>
              ) : (
                <span className="material-icons outlined">
                  add_shopping_cart
                </span>
              )}
              Add to Cart
            </button>
          ) : (
            <Link to="/cart" className="btn btn_outline btn_sm">
              <span className="material-icons outlined icon">
                add_shopping_cart
              </span>
              Go to Cart
            </Link>
          )}
        </div>

        <div className="action_icons">
          {!inWishlist(product._id) ? (
            <button onClick={() => addToWishListHandler()}>
              <span className="material-icons outlined icon">
                favorite_border
              </span>
            </button>
          ) : (
            <button onClick={() => removeFromWishlistHandler()}>
              <span
                className="material-icons outlined icon"
                style={{ color: "red" }}>
                favorite
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { Card };
