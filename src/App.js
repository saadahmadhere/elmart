import {
  CartScreen,
  HomeScreen,
  WishlistScreen,
  ProductScreen,
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
      </Routes>
      <Footer />
    </>
  );
};

export default App;
