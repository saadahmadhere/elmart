import { Rating } from "./Rating";

const Card = ({ product }) => {
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
          <button
            onClick={() => addToCartHandler(product)}
            className="btn btn_primary btn_sm">
            <span className="material-icons outlined ">add_shopping_cart</span>
            Add to Cart
          </button>
        </div>

        <div className="action_icons">
          <button>
            <span className="material-icons outlined icon">
              favorite_border
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Card };
