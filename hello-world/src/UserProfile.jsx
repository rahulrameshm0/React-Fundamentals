// console.log("Component rendering, user:", user);
import { use, useState } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "James Miller",
    age: 25,
    email: "jamesmiller34@gmail.com",
    address: {
      city: "Yeravan",
      country: "Armenia",
    },
  });

  const updateName = () => {
    setUser({
      ...user,
      name: "Rahul",
    });
  };

  const updateAge = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };
  const updateMultiple = () => {
        setUser({
        ...user,
        name:"Rahul",  
        age:32,
        });
  };

  
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateAge}>Update Age By one</button>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateMultiple}>Update Multiple</button>
    </div>
  );
};
