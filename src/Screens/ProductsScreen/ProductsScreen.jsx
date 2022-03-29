import { Navbar } from "../../Components";
import { Card } from "../../Components";
import { useData } from "../../Helper";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductScreen = () => {
  const [loader, setLoader] = useState(false);
  const {
    state: { products },
    dispatch,
  } = useData();

  const fetchData = async () => {
    try {
      setLoader(true);
      const productsData = await axios.get("/api/products");
      dispatch({ type: "PRODUCTS", payload: productsData.data.products });
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (products.length === 0) fetchData();
  }, []);

  console.log(products);
  return (
    <>
      <Navbar />

      {loader ? <h1 style={{ fontSize: "20rem" }}>loading</h1> : null}
      <h2>Hello</h2>

      <div
        className="flex flex_wrap flex_justify__center"
        style={{ gap: "2rem" }}>
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export { ProductScreen };
