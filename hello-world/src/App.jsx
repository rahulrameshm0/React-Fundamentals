import "./App.css";
import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import { ContactForm } from "./Contact";
import { Product } from "./Product";
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";
import { UserDetails } from "./Userdetails";
import { ProductList } from "./ProductList";
import { NameList } from "./NameList";
import { Alert } from "./Alert";
import { NewButton } from "./NewButton";
import { CustomButton } from "./CustomButton";
import { NewsLetter } from "./NewsLetter";
import { Contacts } from "./Contacts";
import { Menu } from "./Menu";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { SimplerCounter } from "./SimplerCounter";
import { PrevStateCount } from "./PreStateCount";
import { BatchingCounter } from "./BatchingCounter";
import { UserProfile } from "./UserProfile";
import { ToDoList } from "./ToDoList";
import { ShoppingCart } from "./ShoppingCart";
import { CounterWithReducer } from "./CounterWithReducer";

function App() {
  return (
    <>
    <CounterWithReducer />
      {/*
    <ShoppingCart />
    <ToDoList/>
    <UserProfile/>
    <BatchingCounter/>
      <PrevStateCount/>
      <SimplerCounter/>
      <LoginCard />
      <Counter />
      <Counter />

       <Menu/>

      <NewsLetter/>
      <Contacts/>
      
      <CustomButton/>

      <Alert>Your changes has been saved</Alert>
      <Alert type="error">Something went wrong</Alert>

      <NewButton/>

      <NameList />
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

      <HelloWithoutJSX />
      <h1>Code testing in react app</h1>
      <Button />
      <Hello />
      <ContactForm /> */}
    </>
  );
}

export default App;
