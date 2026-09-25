import { useState } from "react";

export const Counter = () => {
    
    const [count, setCount] = useState(() => {
        console.log("Initial state function called");
        return 0;
    })
    
    const handleClick = () => {
        setCount(count + 1)
    }
    
    console.log("components renderd with count: ",count )
    return(
        <div>
            <button onClick={handleClick}>count: {count}</button>
        </div>
    )
}