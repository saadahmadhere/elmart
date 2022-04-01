import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="flex_col empty_cart flex_align__center mx_auto ">
      <img
        className="img_responsive"
        src="/images/empty_cart.svg"
        alt="Empty Cart"
      />
      <h2 className="h2 txt_center mx_auto mt_4">Your Cart is empty</h2>
    </div>
  );
};

export { EmptyCart };
