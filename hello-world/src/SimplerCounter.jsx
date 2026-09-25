import { useState } from "react";

export const SimplerCounter = () => {
  const [count, setCount] = useState(0);
  console.log("Simpler Counter Component rendered with count: ", count);

  const handleClick = () => {
    console.log("Before setCount, count is:", count)
    setCount (count + 1)
    console.log("After setCount, count is:", count)

  }
  return (
    <div>
        <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increament</button>
    </div>
  );
};
