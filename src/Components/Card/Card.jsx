import { Rating } from "./Rating";
import { useData } from "../../Helper";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { inWishlist, inCart, dispatch } = useData();

  const addToCartHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const addToWishListHandler = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromWishlistHandler = (product) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
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
        <div className="img_card">
          <img
            src={product.image}
            alt="A bored ape"
            style={{ objectFit: "contain" }}
          />
        </div>
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
              onClick={() => addToCartHandler(product)}
              className="btn btn_primary btn_sm">
              <span className="material-icons outlined">add_shopping_cart</span>
              Add to Cart
            </button>
          ) : (
            <Link to="/cart" className="btn btn_primary btn_sm">
              <span className="material-icons outlined icon">
                add_shopping_cart
              </span>
              Go to Cart
            </Link>
          )}
        </div>

        <div className="action_icons">
          {!inWishlist(product._id) ? (
            <button onClick={() => addToWishListHandler(product)}>
              <span className="material-icons outlined icon">
                favorite_border
              </span>
            </button>
          ) : (
            <button onClick={() => removeFromWishlistHandler(product)}>
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
