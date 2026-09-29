import { useReducer } from "react";

const initialCount = 0;

const countReducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return initialCount;
    default:
      return state;
  }
};

const init = (initialValue) => {
  console.log("init funciton called - the only once!");

  const saveCount = localStorage.getItem("count");

  if (saveCount !== null) {
    console.log("Found saved count:", saveCount);
    return parseInt(saveCount);
  }

  console.log("no saved count using initial value:", initialValue)
  return initialValue;
};

export const CounterWithInit = () => {
  const [count, dispatch] = useReducer(countReducer, initialCount, init);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("increament")}>Increament</button>
      <button onClick={() => dispatch("decreament")}>Decreament</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
