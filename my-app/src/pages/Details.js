import { useParams } from "react-router";
import { PrimaryButton, SecondaryButton } from "../utils/Buttons";
import useProducts from "../hooks/useProducts";
import StyledDetails from "./Details.styled";

const Details = () => {
  const params = useParams();
  const [product, loading, error] = useProducts(params.id);
  const obj = {
    id: "5e9f9c9c9c9c9c9c9c9c9c9",
    title: "Details",
    description:
      "LId aliquip qui cillum adipisicing eiusmod occaecat esse id fugiat cupidatat adipisicing cupidatat. Velit magna velit fugiat Lorem. Enim amet fugiat ad enim aute nisi magna eu occaecat esse. Cillum deserunt labore duis Lorem est.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    price: "$9.99",
    cost: 9.99,
    size: ["S", "M", "L", "XL"],
  };
  return (
    <StyledDetails>
      <div className="item-image">
        <img src={obj.image} alt={obj.title} />
      </div>
      <div className="item-details">
        <h1>{obj.title}</h1>
        <p>{obj.description}</p>
        <p className="item-price">{obj.price}</p>
        <div className="size-selector">
          <p>Select size</p>
          <select>
            {obj.size.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="button-container">
          <SecondaryButton className="item-button cart">
            Add to cart
          </SecondaryButton>
          <PrimaryButton className="item-button buy">Buy now</PrimaryButton>
        </div>
      </div>
    </StyledDetails>
  );
};

export default Details;
