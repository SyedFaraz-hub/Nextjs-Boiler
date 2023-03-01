import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>Details about product{productId}</div>;
};

export default ProductDetails;
