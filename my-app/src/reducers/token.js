import { getToken, setToken } from "../helpfulFunction";

const token = (state = getToken(), action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      let tokens = getToken();
      let newTokens = {
        ...tokens,
        ...action.payload,
      };
      setToken(newTokens);
      return newTokens;
    default:
      return state;
  }
};

export default token;
