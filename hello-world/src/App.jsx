import "./App.css";
import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import { UserProfile } from "./UserProfile";
import { ContactForm } from "./Contact";
import { Product } from "./Product";
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";
import { UserDetails } from "./Userdetails";
import { ProductList } from "./ProductList";

function App() {
  return (
    <div>
      <ProductList />
      
      <UserDetails
        name="James"
        isOnline={true}
        hideOffline={true}
        isPremium={true}
        isNewUser={true}
        role="VIP"
      />

      <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>james@gmail.com</p>
        <button>Edit Profile</button>
      </CardWrapper>

      <Greeting name="James" message="Good Morning" />
      <Greeting name="Tyren" />
      <Greeting message="Welcome" />
      <Greeting />

      <Product
        title="Toy Car"
        price={24.55}
        inStock={false}
        categories={["Electronics", "Computers", "Gaming"]}
      />

      <Welcome name="Rehenrya" alias="The Queen of the Seven Kingdoms" />
      <Welcome name="Aegon" alias="The Concurer" />
      <Welcome name="Daemon" alias="The Husband of the Queen" />

      <Hello />
      <HelloWithoutJSX />
      <h1>Code testing in react app</h1>
      <Button />
      <UserProfile />
      <ContactForm />
    </div>
  );
}

export default App;
