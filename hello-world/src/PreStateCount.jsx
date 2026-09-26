import { useState } from "react";

export const PrevStateCount = () => {
  const [count, setCount] = useState(0);
    console.log("Render Face: Component rendering with count: ", count)
  const handleClick = () => {
    setCount((prev) => {
      console.log("First Update Function: prev count = ", prev);
      return prev + 1;
    });
    // console.log("After setcount (prev => prev + 1), count is: ", count);

    setCount((prev) => {
      console.log("Second Update Function: prev count = ", prev);
      return prev + 5;
    });
    // console.log("After setcount (prev => prev + 5), count is: ", count);

    setCount((prev) => {
      console.log("Third Update Function: prev count = ", prev);
      return prev + 10;
    });
    // console.log("After setcount (prev => prev + 10), count is: ", count);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increament</button>
    </div>
  );
};
