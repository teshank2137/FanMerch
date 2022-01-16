import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/constants";
import StyledItem from "./Item.styled";

const Item = (props) => {
  const { image, title, price } = props.product;
  const navigate = useNavigate();
  const handelClick = () => {
    navigate(`/details/${props.product.id}`);
  };

  return (
    <StyledItem>
      <div className="item-container" onClick={handelClick}>
        <div className="image-container">
          <img src={`${API_URL}${image}`} alt={title} />
        </div>

        <div className="item-info">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
      </div>
    </StyledItem>
  );
};
export default Item;
