import "./EmptyWishlist.css";

const EmptyWishlist = () => {
  return (
    <>
      <div className="flex_col empty_wishlist flex_align__center mt_20">
        <img
          className="img_responsive"
          src="/images/empty_wishlist.svg"
          alt="Empty Cart"
        />
      </div>
      <h4 className="h4 txt_center mx_auto mt_9 empty_wishlist__text">
        Your wishlist is empty
      </h4>
    </>
  );
};

export { EmptyWishlist };
