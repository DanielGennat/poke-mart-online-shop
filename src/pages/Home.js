import styled from "styled-components";
import ShoppingItem from "../components/ShoppingItem";

export default function Home({ items, onAddToCart }) {
  return (
    <>
      <h2>Search Items</h2>
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