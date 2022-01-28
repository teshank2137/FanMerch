import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { PrimaryButton, SecondaryButton } from "../utils/Buttons";
import Loading from "../components/Loding";
import useProducts from "../hooks/useProducts";
import StyledDetails from "./Details.styled";
import { API_URL } from "../utils/constants";
import updateCart from "../actionCreators/updateCart";

const Details = () => {
  const params = useParams();
  const [product, loading] = useProducts(params.id);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartText, setText] = useState("Add to cart");
  const handleCart = (e) => {
    e.preventDefault();
    let productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      console.warn("Product already in Cart");
    } else {
      let newCartItem = product;
      newCartItem.quantity = 1;
      let newCart = [newCartItem, ...cart];
      dispatch(updateCart(newCart));
    }
  };
  useEffect(() => {
    let productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setText("Added To cart");
    } else {
      setText("Add To cart");
    }
  }, [cart, product]);

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
            {cartText}
          </SecondaryButton>
          <PrimaryButton className="item-button buy">Buy now</PrimaryButton>
        </div>
      </div>
    </StyledDetails>
  );
};

export default Details;
