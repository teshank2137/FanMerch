import { useState, useRef } from "react";
import { useParams } from "react-router";
import { PrimaryButton, SecondaryButton } from "../utils/Buttons";
import Loading from "../components/Loding";
import useProducts from "../hooks/useProducts";
import StyledDetails from "./Details.styled";
import { API_URL } from "../utils/constants";
import { isPresentInCart, addToCart } from "../helpfulFunction";

const Details = () => {
  const params = useParams();
  const [product, loading, error] = useProducts(params.id);
  const [cartText, setText] = useState("Add to cart");
  const ref = useRef(null);
  const handleCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setText("Added to cart");
  };

  return (
    <StyledDetails>
      {loading ? <Loading /> : null}
      <div className="item-image">
        <img src={API_URL + product.image} alt={product.name} />
      </div>
      <div className="item-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="item-price">{product.price}</p>
        {product.size ? (
          <div className="size-selector">
            <p>Select size</p>
            <select>
              {product.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <div className="button-container">
          <SecondaryButton className="item-button cart" onClick={handleCart}>
            {isPresentInCart(product.id) ? "Added to cart" : cartText}
          </SecondaryButton>
          <PrimaryButton className="item-button buy">Buy now</PrimaryButton>
        </div>
      </div>
    </StyledDetails>
  );
};

export default Details;
