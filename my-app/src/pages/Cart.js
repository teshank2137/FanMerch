import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { getCartItems } from "../helpfulFunction";
import { PrimaryButton } from "../utils/Buttons";
import StyledCart from "./Cart.styled";

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(getCartItems);
  }, []);
  console.log(cart);
  return (
    <StyledCart>
      <h1>Cart</h1>
      <PrimaryButton className="btn">Checkout</PrimaryButton>
      <div className="cart">
        {cart.map((item) => (
          <CartItem key={item} item={item} />
        ))}
      </div>
      <PrimaryButton className="btn">Checkout</PrimaryButton>
    </StyledCart>
  );
};
export default Cart;
