import styled from "styled-components";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";

export default function ShoppingCart({ shoppingCart, onRemoveFromCart }) {
  return (
    <>
      <h2>Cart</h2>
      <CartContainer>
        {shoppingCart.map((item, index) => {
          return (
            <Cart key={index} name={item.name} details={item.url} onRemoveItem={onRemoveFromCart} />
          );
        })}
        <Link to="/">Back to the shop</Link>
      </CartContainer>
    </>
  )
}

const CartContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;