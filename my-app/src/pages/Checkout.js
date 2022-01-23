import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { API_URL, headers } from "../utils/constants";

const Checkout = () => {
  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (auth === false) {
      navigate("/account/login");
    } else {
    }
  }, [auth, navigate]);

  useEffect(() => {
    if (auth) {
      fetch(API_URL + "/accounts/profile/", {
        method: "GET",
        headers: {
          ...headers,
          Authorization: `Bearer ${token.access}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setProfile(data.data))
        .catch();
    }
  }, []);

  return (
    <div>
      <h1>Checkout</h1>
      {JSON.stringify(profile)}
    </div>
  );
};

export default Checkout;
