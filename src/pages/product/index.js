import Link from "next/link";
import React from "react";

const Product = ({ productId = 100 }) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/product/1">
        <a>Product 1</a>
      </Link>
      <Link href="/product/2">
        <a>Product 2</a>
      </Link>
      <Link href={`/product/${productId}`} replace>
        <a>Product 3</a>
      </Link>
    </div>
  );
};

export default Product;
