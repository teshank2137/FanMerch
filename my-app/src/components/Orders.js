import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { PrimaryButton, SecondaryButton } from "../utils/Buttons";
import StyledOrder from "./Order.styled";
import { headers, API_URL } from "../utils/constants";

const Order = ({ order, callback, setLoading }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  const { status, order_date, total, isPaid, id } = order;
  const d = new Date(order_date);
  d.getFullYear();
  let formatted_date =
    ("0" + d.getDate()).slice(-2) +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    d.getFullYear();

  const deleteOrder = async () => {
    setLoading(true);
    const options = {
      method: "DELETE",
      headers: {
        ...headers,
        Authorization: `Bearer ${token.access}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    try {
      let res = await fetch(API_URL + "/order/", options);
      if (res.status < 400) {
        callback(id);
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

  const checkout = (e) => {
    e.preventDefault();
    navigate("/checkout", { state: { order_id: id, total: total } });
  };

  return (
    <StyledOrder>
      <div className="status flex">
        <div className="group">
          <div className="label">Status:</div>
          {status}
        </div>
      </div>
      <div className="flex details">
        <div className="price group">
          <div className="label">Order Total:</div>
          {total}
        </div>
        <div className="date group">
          <div className="label">Ordered on:</div>
          {formatted_date}
        </div>
      </div>
      {!isPaid ? (
        <div className="btn-grp">
          <PrimaryButton onClick={checkout}>Pay Now</PrimaryButton>
          <SecondaryButton onClick={deleteOrder}>Cancel</SecondaryButton>
        </div>
      ) : null}
    </StyledOrder>
  );
};

export default Order;
