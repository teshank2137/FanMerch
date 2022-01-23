const updateToken = (token) => {
  console.log("updateToken Called");
  return {
    type: "UPDATE_TOKEN",
    payload: token,
  };
};
export default updateToken;
