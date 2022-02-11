import { useState, useEffect } from "react";
import Item from "../components/Item";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  useEffect(() => {
    products.sort((a, b) => {
      return a[sortBy] - b[sortBy];
    });
    setProducts(products);
    console.log(products);
  }, [sortBy, products]);
  return (
    <div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="price">Price</option>
        <option value="name">Name</option>
      </select>
      <div className="products">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
