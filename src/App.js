import { CartScreen, HomeScreen, WishlistScreen } from "./Screens";
import { ProductScreen } from "./Screens";
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
    </>
  );
};

export default App;
