import { combineReducers } from "redux";
import cart from "./cart";
import token from "./token";
import auth from "./auth";
export default combineReducers({
  cart,
  token,
  auth,
});
