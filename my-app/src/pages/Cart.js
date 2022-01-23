import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CartItem from "../components/CartItem";
import { PrimaryButton } from "../utils/Buttons";
import StyledCart from "./Cart.styled";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigation = useNavigate();
  console.log(cart);
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
        <PrimaryButton className="btn" onClick={(e) => navigation("/checkout")}>
          Checkout
        </PrimaryButton>
      )}

      <div className="cart">
        {cart.map((item) => (
          <CartItem key={item} item={item} />
        ))}
      </div>
      {cart.length <= 3 ? null : (
        <PrimaryButton className="btn" onClick={(e) => navigation("/checkout")}>
          Checkout
        </PrimaryButton>
      )}
    </StyledCart>
  );
};
export default Cart;
