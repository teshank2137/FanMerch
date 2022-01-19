import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { PrimaryButton } from "../utils/Buttons";
import StyledCart from "./Cart.styled";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
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
