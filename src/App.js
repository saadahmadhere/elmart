import {
  CartScreen,
  HomeScreen,
  WishlistScreen,
  ProductScreen,
  Login,
  SignUp,
} from "./Screens";
import { Footer } from "./Components";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/productListing" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/wishlist" element={<WishlistScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
