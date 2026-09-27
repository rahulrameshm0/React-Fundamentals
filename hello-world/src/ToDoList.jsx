import { useState } from "react";

export const ToDoList = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Text a letter" },
    { id: 2, text: "Build an App" },
  ]);

  const addItem = () => {
    const newItem = {
        id: Date.now(),
        text: "deploy to array"
    };

    setItems([...items, newItem])
    // items.push(newItem)
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  };

  const toggleDone = (id) => {
    setItems(
        items.map((item) => {
            if (item.id === id) {
                return{...item, done: !item.done}
            }
            return item;
        })
    );
  };


  return <div>
    <ul>
        {items.map((item) => {
            return( 
                <li key={item.id}>
                <span style={{ textDecoration: item.done ? "line-through" : "none" }}>{item.text}</span>

                <button onClick={() => toggleDone(item.id)}>{item.done ? "Undo" : "Done"}</button>
                <button onClick={() => removeItem(item.id)}>Delete</button>
            </li>
            )
        })}
        
    </ul>

    <button onClick={addItem}>Add Item</button>
  </div>;
};
