import { useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      let updatedItems;
      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        updatedItems = [
          ...state.items,

          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
        totalItems: updatedItems.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
      };
    }

    case "REMOVE_ITEM": {
      const filterItems = state.item.filter(
        (item) => item.id !== action.payload.id,
      );

      return {
        ...state,
        items: filterItems,
        totalAmount: filterItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),

        totalItems: filterItems.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
      };
    }
    default:
      return state;
  }
};

export const ShoppingCartWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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

          <button
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                payload: product,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      <div>
        <h2>Shoping Cart</h2>
        {state.items.length === 0 ? (
          <p>Your Cart is Empty</p>

        ) : (
          <div>
            {state.items.map((item) => (
              <div key={item.id}>
                <p>
                  {item.name} - ${item.price} X {item.quantity}
                </p>
                <button onClick={() => dispatch({
                    remove: "REMOVE_ITEM",
                    payload: {id: item.id}
                })}>Remove</button>
              </div>
            ))}
          </div>
        )}
        <h3>Total items: {state.totalItems}</h3>
        <h3>Total items: {state.totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};
