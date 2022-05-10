import "./SingleProductCard.css";
import { Rating } from "../Card/Rating";
import {
  addToCart,
  useAuth,
  addToWishlist,
  removeFromWishlist,
} from "../../Helper";
import { Link } from "react-router-dom";

const SingleProductCard = ({ product }) => {
  const { userState, dispatchUserState, inWishlist, inCart } = useAuth();
  return (
    <div className="card_single_product flex_align__center">
      <section className="image_single_product">
        <img className="img_responsive mx_auto block" src={product?.image} />
      </section>
      <section className="single_product_description">
        <h2 className="h2 gray_title mt_1">{product?.name}</h2>
        <h3 className="h3 gray_subtitle mt_1">{product?.brand}</h3>
        <h2 className="h2 txt_semibold my_3">{`₹ ${
          product?.price.split(".")[0]
        }`}</h2>
        <Rating reviews={product?.reviews} ratings={product?.ratings} />
        <article className="mt_3">{product?.description}</article>
        <div className="action_buttons mt_8">
          {!inCart(product?._id) ? (
            <button
              className="btn btn_primary btn_sm"
              onClick={() =>
                addToCart(product, userState.token, dispatchUserState)
              }>
              <span className="material-icons outlined">add_shopping_cart</span>
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
          {!inWishlist(product?._id) ? (
            <button
              className="btn btn_primary btn_sm"
              onClick={() =>
                addToWishlist(product, userState.token, dispatchUserState)
              }>
              <span className="material-icons outlined icon">
                favorite_border
              </span>
              Add to wishlist
            </button>
          ) : (
            <button
              className="btn btn_primary btn_sm"
              onClick={() =>
                removeFromWishlist(
                  product._id,
                  userState.token,
                  dispatchUserState
                )
              }>
              <span className="material-icons outlined icon">
                favorite_border
              </span>
              Remove from wishlist
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export { SingleProductCard };
