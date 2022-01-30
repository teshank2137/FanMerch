const updateToken = (token) => {
  return {
    type: "UPDATE_TOKEN",
    payload: token,
  };
};
export default updateToken;
