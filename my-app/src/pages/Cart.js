import CartItem from "../components/CartItem";
import { PrimaryButton } from "../utils/Buttons";
import StyledCart from "./Cart.styled";

const Cart = () => {
  return (
    <StyledCart>
      <h1>Cart</h1>
      <PrimaryButton className="btn">Checkout</PrimaryButton>
      <div className="cart">
        {[1, 2, 3].map((item) => (
          <CartItem key={item} />
        ))}
      </div>
      <PrimaryButton className="btn">Checkout</PrimaryButton>
    </StyledCart>
  );
};
export default Cart;
