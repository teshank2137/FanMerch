import { useState } from "react";
import useProducts from "../hooks/useProducts";
import Item from "../components/Item";
import StyledShop from "./Shop.styled";
import Loading from "../components/Loding";
const Shop = () => {
  const [products, loading, error] = useProducts();

  return (
    <StyledShop className="shop-container">
      {loading ? <Loading /> : null}
      <div className="shop-header">
        <h1 className="title">Shop</h1>
        <div className="shop-sort">
          <p>Sort by:</p>
          <select>
            <option value="1">Price</option>
            <option value="2">Name</option>
          </select>
        </div>
      </div>
      <div className="shop-list">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </StyledShop>
  );
};
export default Shop;
