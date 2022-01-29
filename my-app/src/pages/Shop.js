import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import Item from "../components/Item";
import StyledShop from "./Shop.styled";
import Loading from "../components/Loding";
const Shop = () => {
  const [products, loading] = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("price");
  useEffect(() => {
    let sorted = [];
    if (sort === "price") {
      sorted = [...products].sort((a, b) => {
        return parseInt(a.price) - parseInt(b.price);
      });
    } else {
      //sort by name
      console.log(sort);
      sorted = [...products].sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
    setFilteredProducts(sorted);
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
        {filteredProducts.map((product, index) => (
          <Item key={index} product={product} />
        ))}
      </div>
    </StyledShop>
  );
};
export default Shop;
