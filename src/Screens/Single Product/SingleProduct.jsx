import { useParams } from "react-router-dom";
import { SingleProductCard } from "../../Components";
import { useEffect, useState } from "react";
import { getProduct, Loader } from "../../Helper";

const SingleProduct = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { id: productId } = useParams();

  useEffect(() => {
    getProduct(productId, setLoading, setProduct);
  }, []);

  return <>{loading ? <Loader /> : <SingleProductCard product={product} />}</>;
};

export { SingleProduct };
