export const getCartItems = () => {
  const cart = window.localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const setCart = (cart) => {
  window.localStorage.setItem("cart", JSON.stringify(cart));
  console.log("cart saved in localStorage");
  return getCartItems();
};

export const addToCart = (item) => {
  const cart = getCartItems();
  if (isPresentInCart(item.id)) {
    console.log("product already added to cart");
  } else {
    item.quantity = 1;
    cart.push(item);
  }
  window.localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (id) => {
  const cart = getCartItems();
  const newCart = cart.filter((cartItem) => cartItem.id !== id);
  window.localStorage.setItem("cart", JSON.stringify(newCart));
};

export const isPresentInCart = (id) => {
  const cart = getCartItems();
  let prod = cart.find((item) => item.id === id);
  if (prod) {
    return true;
  } else {
    return false;
  }
};

export const updateProductCountInCart = (id, delimiter = 1) => {
  const cart = getCartItems();
  if (isPresentInCart(id)) {
    cart.forEach((prod) => {
      if (prod.id === id) {
        prod.quantity += delimiter;
        if (prod.quantity <= 0) {
          removeFromCart(id);
          throw new Error("Product count 0 and removed");
        }
      }
    });
    window.localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    throw new Error("Product not in cart");
  }
};
