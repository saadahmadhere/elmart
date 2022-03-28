import { HomeScreen } from "./Screens";
import { ProductScreen } from "./Screens";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/productListing" element={<ProductScreen />} />
    </Routes>
  );
};

export default App;
