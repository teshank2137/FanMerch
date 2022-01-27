import { PrimaryButton, SecondaryButton } from "../utils/Buttons";
import StyledOrder from "./Order.styled";

const Order = ({ order }) => {
  const { status, order_date, total, isPaid } = order;
  const d = new Date(order_date);
  d.getFullYear();
  let formatted_date =
    ("0" + d.getDate()).slice(-2) +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    d.getFullYear();
  return (
    <StyledOrder>
      <div className="status flex">
        <div className="group">
          <div className="label">Status:</div>
          {status}
        </div>
        {!isPaid ? (
          <div className="btn-grp">
            <PrimaryButton>Pay Now</PrimaryButton>
            <SecondaryButton>Cancel</SecondaryButton>
          </div>
        ) : null}
      </div>
      <div className="flex">
        <div className="price group">
          <div className="label">Order Total:</div>
          {total}
        </div>
        <div className="date group">
          <div className="label">Ordered on:</div>
          {formatted_date}
        </div>
      </div>
    </StyledOrder>
  );
};

export default Order;
