export const getCartItems = () => {
  const cart = window.localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (item) => {
  const cart = getCartItems();
  cart.push(item);
  window.localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (item) => {
  const cart = getCartItems();
  const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
  window.localStorage.setItem("cart", JSON.stringify(newCart));
};
