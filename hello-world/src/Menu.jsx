import { Menuitems } from "./MenuItems";

export const Menu = () => {
  const handleOrder = (itemName, itemPrice) => {
    alert(`Your order ${itemName} for $${itemPrice}`);
  };

  return(
    <div>
        <h2>Our Menu</h2>
        <Menuitems name="Pizza" price={25} onOrder={handleOrder}/>
        <Menuitems name="Chicken Burgur" price={65} onOrder={handleOrder}/>
        <Menuitems name="Beef Bugur" price={85} onOrder={handleOrder}/>
        <Menuitems name="Salad" price={2} onOrder={handleOrder}/>
    </div>
  )
};
