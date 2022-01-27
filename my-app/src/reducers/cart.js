import { getCartItems, setCart } from "../helpfulFunction";

const cart = (state = getCartItems(), action) => {
  switch (action.type) {
    case "UPDATE_CART":
      setCart(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default cart;
