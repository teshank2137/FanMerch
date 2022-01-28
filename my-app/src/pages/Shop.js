import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import Item from "../components/Item";
import StyledShop from "./Shop.styled";
import Loading from "../components/Loding";
const Shop = () => {
  const [products, loading] = useProducts();
  const [sort, setSort] = useState("price");
  useEffect(() => {
    if (sort === "price") {
      products.sort((a, b) => {
        if (parseInt(a.price) < parseInt(b.price)) {
          return -1;
        } else {
          return 1;
        }
      });
    } else {
      //sort by name
      products.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }, [sort, products]);

  return (
    <StyledShop className="shop-container">
      {loading ? <Loading /> : null}
      <div className="shop-header">
        <h1 className="title">Shop</h1>
        <div className="shop-sort">
          <p>Sort by:</p>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="price">Price</option>
            <option value="name">Name</option>
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
