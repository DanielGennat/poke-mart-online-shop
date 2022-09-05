import Header from "./components/Header";
import ShoppingItem from "./components/ShoppingItem";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Cart from "./components/Cart";

function App() {

  const apiURL = "https://pokeapi.co/api/v2/item/";

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.results);
      })
      .catch((error) => console.error(error));
  }, [apiURL]);

  const [shoppingCart, setShoppingCart] = useState([]);

  function addToCart(newItem) {
    setShoppingCart([...shoppingCart, newItem]);
  }

  function removeFromCart(name) {
    setShoppingCart(shoppingCart.filter((item) => item.name !== name));
  }

  return (
    <div>
      <Header />
      <h2>Cart</h2>
      <CartContainer>
        {shoppingCart.map((item) => {
          return (
            <Cart key={item.name} name={item.name} details={item.url} onRemoveItem={removeFromCart} />
          );
        })}
      </CartContainer>
      <h2>Search Items</h2>
      <CardContainer>
        {items.map((item) => {
          return (
            <ShoppingItem key={item.name} name={item.name} details={item.url} onAddItem={addToCart} />
          );
        })}
      </CardContainer>
    </div>
  );
}

export default App;

const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CartContainer = styled(CardContainer)``;