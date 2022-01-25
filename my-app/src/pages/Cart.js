import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CartItem from "../components/CartItem";
import { PrimaryButton } from "../utils/Buttons";
import StyledCart from "./Cart.styled";
import { getCartTotal } from "../helpfulFunction";
import { API_URL, headers } from "../utils/constants";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const total = useState(getCartTotal(cart));
  const navigation = useNavigate();
  console.log(cart);
  const createOrder = (e) => {
    e.preventDefault();
    navigation("/checkout");
  };
  return (
    <StyledCart>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <div className="add-items">
          <h3>Add items to cart</h3>
          <PrimaryButton className="btn" onClick={(e) => navigation("/shop")}>
            Shop now
          </PrimaryButton>
        </div>
      ) : (
        <div>
          <h2>Cart Total {total}/-</h2>
          <PrimaryButton className="btn" onClick={createOrder}>
            Checkout
          </PrimaryButton>
        </div>
      )}

      <div className="cart">
        {cart.map((item) => (
          <CartItem key={item} item={item} />
        ))}
      </div>
      {cart.length <= 3 ? null : (
        <PrimaryButton className="btn" onClick={createOrder}>
          Checkout
        </PrimaryButton>
      )}
    </StyledCart>
  );
};
export default Cart;
