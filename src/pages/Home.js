import styled from "styled-components";
import ShoppingItem from "../components/ShoppingItem";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home({ items, onAddToCart, counter }) {
  return (
    <>
      <h2>Search Items</h2>
      <Link to="/shopping-cart">
        <Div>
          <img alt="" src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Basket_2-2-256.png" />
          <Counter>{counter}</Counter>
        </Div>
      </Link>
      <CardContainer>
        {items.map((item) => {
          return (
            <ShoppingItem key={item.name} name={item.name} details={item.url} onAddItem={onAddToCart} />
          );
        })}
      </CardContainer>
    </>
  )
}

const CardContainer = styled.ul`
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      `;

const Counter = styled.p`
// background-image: url("https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Basket_2-2-256.png");
// background-repeat: no-repeat;
// height: 150px;
// background-size: contain;
position: absolute;
top: 75px;
left: 140px;
`;

const Div = styled.div`
position: relative;
`;