import { useState } from "react";

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState({
    reactCourse: 0,
    vueCourse: 0,
  });

  const prices = {
    reactCourse: 49.99,
    vueCourse: 93.99,
  };

  const handleReactCourse = () => {
    if (cartItems.reactCourse < 5) {
      setCartItems({
        ...cartItems,
        reactCourse: cartItems.reactCourse + 1,
      });
    }
  };
  const handleVueCourse = () => {
    setCartItems({
      ...cartItems,
      vueCourse: cartItems.vueCourse + 1,
    });
  };

  const clearCart = () => {
    setCartItems({
        reactCourse: 0,
        vueCourse: 0
    });
  };

  return (
    <div>
      <h2>Shopping Cart Component</h2>
      <ProductCard
        name="React Course"
        price={prices.reactCourse}
        quantity={cartItems.reactCourse}
        onAddToCart={handleReactCourse}
      />
      <ProductCard
        name="Vue Course"
        price={prices.vueCourse}
        quantity={cartItems.vueCourse}
        onAddToCart={handleVueCourse}
      />
      <CartSummary cartItems={cartItems} prices={prices} />
      <button onClick={clearCart}>Cleat Cart</button>
    </div>
  );
};

export const ProductCard = ({ name, price, quantity, onAddToCart }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};
export const CartSummary = ({ cartItems, prices }) => {
  const totalItems = cartItems.reactCourse + cartItems.vueCourse;
  const totalPrice =
    cartItems.reactCourse * prices.reactCourse +
    cartItems.vueCourse * prices.vueCourse;
  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};
