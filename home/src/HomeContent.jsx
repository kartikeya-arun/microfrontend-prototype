import React, { useState, useEffect } from "react";
import "./global.scss";

import { getProducts, currency } from "./products";

export default function Homecontent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  console.log("Procts--->", products);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="flex">
              <div className="flex-grow font-bold">
                <a className="product-name">{product.name}</a>
              </div>
              <div className="flex-end product-price">{currency.format(product.price)}</div>
            </div>
            <div className="text-sm mt-4">{product.description}</div>
          </div>
        );
      })}
    </div>
  );
}
