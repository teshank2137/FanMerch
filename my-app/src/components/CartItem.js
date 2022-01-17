import { useState, useEffect } from "react";
import StyledCartItem from "./CartItem.styled";
import { API_URL } from "../utils/constants";
import { updateProductCountInCart, removeFromCart } from "../helpfulFunction";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const updateQuantity = (by) => {
    if (quantity + by <= 0) {
      removeFromCart(item.id);
    } else {
      updateProductCountInCart(item.id, by);
      setQuantity(quantity + by);
    }
  };
  useEffect(() => {}, []);
  return (
    <StyledCartItem>
      <img src={API_URL + item.image} alt={item.name} />
      <div className="item-details">
        <div className="main">
          <div className="title">{item.name}</div>
          <div className="price">{item.price}</div>
          <div>Qt. {quantity}</div>
        </div>
        <div className="quantity">
          <div className="arrow" onClick={() => updateQuantity(-1)}>
            &#10094;
          </div>
          <div className="value">{quantity}</div>
          <div className="arrow" onClick={() => updateQuantity(1)}>
            &#10095;
          </div>
        </div>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
