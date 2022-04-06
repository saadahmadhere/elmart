import "./CheckOutDetails.css";

const CheckOutDetails = ({ cart, totalPrice, totalItems }) => {
  return (
    <div className="cart_details mx_5">
      <h2 className="h2">Price details</h2>
      <hr className="hr" />
      <div className="price">
        <p className="txt_regular txt_md">Total Items</p>
        <p className="txt_regular txt_md">{totalItems}</p>
      </div>

      {cart.map((cartItem) => {
        return (
          <div className="price" key={cartItem.id}>
            <p className="txt_regular txt_md">{cartItem.name}</p>
            <p className="txt_regular txt_md">
              {cartItem.price * cartItem.qty}
            </p>
          </div>
        );
      })}

      <hr className="hr" />
      <div className="total">
        <p className="txt_bold txt_md">Total Amount</p>
        <p className="txt_bold txt_md">{totalPrice}</p>
      </div>
      <hr className="hr" />
      <button className="btn btn_checkout btn_primary btn_lg mt_8">
        Place order
      </button>
    </div>
  );
};

export { CheckOutDetails };
