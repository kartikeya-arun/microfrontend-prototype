import React, { useState, useEffect } from "react";

import { getProductById, currency } from "home/products";

import "home/globalstyles";
import { useParams } from "react-router";

export default function PDPContent() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if(id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [])

  if(!product) return null;


  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow product-name">{product.name}</h1>
          <div className="font-bold text-3xl flex-end product-price">
            {currency.format(product.price)}
          </div>
        </div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  )
}