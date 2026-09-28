import { useReducer } from "react";

export const ShoppingCartWithReducer = () => {
  const products = [
    { id: 1, name: "Python Course", price: 99.99 },
    { id: 2, name: "MernStack Course", price: 49.99 },
    { id: 3, name: "Java", price: 59.99 },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>
            {product.name} - ${product.price}
          </h3>

          <button>Add to Cart</button>
        </div>
      ))}
      ;
    </div>
  );
};
