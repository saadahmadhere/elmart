import "./WishlistScreen.css";
import { useData } from "../../Helper";
import { EmptyWishlist } from "..";
import { Card } from "../../Components/Card/Card";

const WishlistScreen = () => {
  const {
    state: { wishlist },
  } = useData();

  return (
    <main className="main_wishlist">
      <h3 className="h3 gray_title txt_center">My Wishlist</h3>
      <hr className="hr primary_hr" />
      {wishlist[0] ? (
        <div
          className="flex flex_wrap flex_justify__center"
          style={{ gap: "2rem" }}>
          {wishlist.map((wishlistItem) => (
            <Card product={wishlistItem} key={wishlistItem._id} />
          ))}
        </div>
      ) : (
        <EmptyWishlist />
      )}
    </main>
  );
};

export { WishlistScreen };
