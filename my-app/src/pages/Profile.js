import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledProfile from "./Profile.styled";
import Order from "../components/Orders";
import { headers, API_URL } from "../utils/constants";
import { useNavigate } from "react-router";
import { refreshToken } from "../helpfulFunction";
import updateToken from "../actionCreators/updateToken";
import { PrimaryButton } from "../utils/Buttons";

const Profile = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getOrders();
    let newToken = refreshToken(token);
    dispatch(updateToken(newToken));
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
      const res = await fetch(API_URL + "/order/", options);
      if (res.status < 400) {
        const data = await res.json();
        data.data.reverse();
        setOrders(data.data);
      } else if (res.status === 401) {
        navigate("/account/login");
      } else {
        const data = await res.json();
        console.log(data);
        window.alert("Something went wrong");
      }
    } catch {
      window.alert("Not connected to the internet");
    }
  };

  return (
    <StyledProfile>
      <h1>Profile</h1>
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
          orders.map((o) => <Order order={o} key={o.id} />)
        )}
      </div>
    </StyledProfile>
  );
};
export default Profile;
