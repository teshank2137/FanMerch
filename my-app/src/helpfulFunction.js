import { useDispatch } from "react-redux";
import { API_URL, headers } from "./utils/constants";

export const getCartItems = () => {
  const cart = window.localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const setCart = (cart) => {
  window.localStorage.setItem("cart", JSON.stringify(cart));
  console.log("cart saved in localStorage");
  return getCartItems();
};

export const setToken = (token) => {
  window.localStorage.setItem("token", JSON.stringify(token));
  return token;
};

export const getToken = () => {
  const token = window.localStorage.getItem("token");
  return token ? JSON.parse(token) : {};
};

export const refreshToken = async (token) => {
  try {
    const res = await fetch(API_URL + "/accounts/refresh/", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        refresh: token.refresh,
      }),
    });
    if (res.status < 400) {
      const data = await res.json();
      return data;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

export const getCartTotal = (cart) => {
  let sum = 0;
  cart.forEach((item) => (sum += item.price * item.quantity));
  return sum;
};
