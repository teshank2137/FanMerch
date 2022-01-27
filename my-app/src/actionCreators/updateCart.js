const updateCart = (cart) => {
  return {
    type: "UPDATE_CART",
    payload: cart,
  };
};
export default updateCart;
