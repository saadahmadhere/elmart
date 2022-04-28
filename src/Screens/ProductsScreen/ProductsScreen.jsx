import axios from "axios";
import { Card } from "../../Components";
import { useFilter } from "../../Helper";
import { useState, useEffect } from "react";
import { Filters } from "../../Components";

const ProductScreen = () => {
  const [loader, setLoader] = useState(false);
  const { filteredData, filterDispatch } = useFilter();

  const fetchData = async () => {
    try {
      setLoader(true);
      const productsData = await axios.get("/api/products");
      filterDispatch({ type: "PRODUCTS", payload: productsData.data.products });
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (filteredData.length === 0) fetchData();
  }, []);

  return (
    <div className="main_filter">
      {loader ? <h1 style={{ fontSize: "20rem" }}>loading</h1> : null}
      <Filters />
      <section className="products mt_10">
        <div
          className="product_list flex flex_wrap flex_justify__center"
          style={{ gap: "2rem" }}>
          {filteredData.map((product) => (
            <Card product={product} key={product._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export { ProductScreen };
