import "./CartScreen.css";
import { CardHorizontal, CheckOutDetails } from "../../Components";
import { EmptyCart } from "../";
import { useAuth } from "../../Helper";

const CartScreen = () => {
  const {
    userState: {
      userData: { cart },
    },
  } = useAuth();

  const totalPrice = cart.reduce(
    (acc, sum) => acc + Number(sum.price * sum.qty),
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + Number(item.qty), 0);

  return (
    <main className="main">
      <h1 className="h1 gray_title">My Cart</h1>
      <hr className="hr primary_hr" />
      {cart[0] ? (
        <section className="content grid grid_50_50 gap_1">
          <div>
            {cart.map((product) => (
              <CardHorizontal product={product} key={product.id} />
            ))}
          </div>

          <CheckOutDetails
            cart={cart}
            totalPrice={totalPrice}
            totalItems={totalItems}
          />
        </section>
      ) : (
        <EmptyCart />
      )}
    </main>
  );
};

export { CartScreen };
