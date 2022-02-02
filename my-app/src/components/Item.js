import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/constants";
import StyledItem from "./Item.styled";

const Item = (props) => {
  const { image, name, price } = props.product;
  const navigate = useNavigate();
  const handelClick = () => {
    navigate(`/details/${props.product.id}`);
  };

  return (
    <StyledItem>
      <div className="item-container" onClick={handelClick}>
        <div className="image-container">
          <img src={`${API_URL}${image}`} alt={name} />
        </div>

        <div className="item-info">
          <h3>{name}</h3>
          <p>&#8377; {price}</p>
        </div>
      </div>
    </StyledItem>
  );
};
export default Item;
