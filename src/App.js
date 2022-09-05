import Header from "./components/Header";
import { useEffect, useState } from "react";
import ShoppingCart from "./pages/ShoppingCart";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

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
    console.log(name);
    setShoppingCart(shoppingCart.filter((item) => item.name !== name));
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home items={items} onAddToCart={addToCart} />} />
        <Route path="/shopping-cart" element={<ShoppingCart shoppingCart={shoppingCart} onRemoveFromCart={removeFromCart} />} />
      </Routes>
    </div>
  );
}

export default App;
