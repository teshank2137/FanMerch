import { getToken, setToken } from "../helpfulFunction";

const token = (state = getToken(), action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      let tokens = getToken();
      let newTokens = {
        ...tokens,
        ...action.payload,
      };
      console.log(newTokens);
      setToken(newTokens);
      return newTokens;
    case "REMOVE_TOKEN":
      setToken({});
      return {};
    default:
      return state;
  }
};

export default token;
