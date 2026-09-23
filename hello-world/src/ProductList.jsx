import React from "react";

export const ProductList = () => {
  const prodcuts = [
    { id: 1, name: "watch", price: 499 },
    { id: 2, name: "Laptop", price: 999 },
    { id: 3, name: "Camera", price: 2999 },
  ];

  const productElemet = prodcuts.map((product) => {
    return (
      <React.Fragment key={product.id}>
        
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        
      </React.Fragment>
    );
  });

  return (
    <div>
      <h1>All products</h1>
      <div>{productElemet}</div>
    </div>
  );
};
