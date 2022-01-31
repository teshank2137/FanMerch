import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import StyledProfile from "./Profile.styled";
import Order from "../components/Orders";
import { headers, API_URL } from "../utils/constants";
import { useLocation, useNavigate } from "react-router";
import { refreshToken } from "../helpfulFunction";
import updateToken from "../actionCreators/updateToken";
import { PrimaryButton, SecondaryButton } from "../utils/Buttons";
import logoutUser from "../actionCreators/logout";
import deleteToken from "../actionCreators/deleteToken";
import Loading from "../components/Loding";
import { motion } from "framer-motion/dist/framer-motion";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  useEffect(() => {
    getOrders();
    refreshToken(token).then((newToken) => {
      if (newToken) {
        dispatch(updateToken(newToken));
      }
    });
    if (state) {
      if (state.success) {
        setSuccess(true);
      }
      if (state.failure) {
        setError(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOrders = async () => {
    const options = {
      method: "GET",
      headers: {
        ...headers,
        Authorization: `Bearer ${token.access}`,
      },
    };
    try {
      setLoading(true);
      const res = await fetch(API_URL + "/order/", options);
      if (res.status < 400) {
        const data = await res.json();
        data.data.reverse();
        setOrders(data.data);
      } else if (res.status === 401) {
        navigate("/account/login");
      } else {
        const data = await res.json();
        console.error(data);
        window.alert("Something went wrong");
      }
    } catch {
      window.alert("Not connected to the internet");
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = (id) => {
    const newOrders = orders.filter((order) => order.id !== id);
    setOrders(newOrders);
  };

  const handelLogout = (e) => {
    e.preventDefault();
    dispatch(deleteToken());
    dispatch(logoutUser());
    navigate("/account/login");
  };

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
    setError(false);
  };
  return (
    <>
      {loading ? <Loading /> : null}
      <StyledProfile>
        <h1>Profile</h1>
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Order Placed Successfully 🙌
          </Alert>
        </Snackbar>
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Order Failed 😞
          </Alert>
        </Snackbar>
        <div className="orders">
          <h2 className="previous-order">Previous Orders</h2>
          {orders.length === 0 ? (
            <div className="add-items">
              <h3>You Haven't ordered Anything</h3>
              <PrimaryButton className="btn" onClick={(e) => navigate("/shop")}>
                Shop now
              </PrimaryButton>
            </div>
          ) : (
            orders.map((o, i) => (
              <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Order
                  order={o}
                  key={o.id}
                  callback={deleteOrder}
                  setLoading={setLoading}
                />
              </motion.div>
            ))
          )}
        </div>
        <div className="account">
          <h2 className="account-title">Accounts</h2>
          <SecondaryButton onClick={handelLogout}>Logout</SecondaryButton>
        </div>
      </StyledProfile>
    </>
  );
};
export default Profile;
