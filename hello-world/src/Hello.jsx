import React from "react"

// With JSX
export const Hello = () => {
    return(<div id="container">
        <h2>Hello James</h2>
    </div>)
} 


// Without JSX
export const HelloWithoutJSX = () => {
    return React.createElement("div", 
        {id: "container"},
         React.createElement("h1", null, "Hello Rahul! ")
        );
    
}