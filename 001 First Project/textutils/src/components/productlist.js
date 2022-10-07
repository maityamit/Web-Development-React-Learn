import React from "react";
import Product from "./produt";

export default function productlist(props) {
  return props.product.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        index={i}
      />
    );
  });
}
