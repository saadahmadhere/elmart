import { CartScreen, HomeScreen } from "./Screens";
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
      </Routes>
    </>
  );
};

export default App;
