import {
  CartScreen,
  HomeScreen,
  WishlistScreen,
  ProductScreen,
  Login,
  SignUp,
} from "./Screens";
import { Footer, Navbar, RequiresAuth } from "./Components";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/productListing" element={<ProductScreen />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <CartScreen />
            </RequiresAuth>
          }
        />

        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishlistScreen />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
