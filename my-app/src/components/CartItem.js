import StyledCartItem from "./CartItem.styled";

const CartItem = () => {
  const item = {
    id: 2,
    title: "Milk",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    price: 2.99,
    currency: "USD",
    quantity: 1,
  };
  const value = [];
  return (
    <StyledCartItem>
      <img src={item.image} alt="item" />
      <div className="item-details">
        <div className="main">
          <div className="title">{item.title}</div>
          <div className="price">{item.price}</div>
        </div>
        <div className="quantity">
          <div className="arrow" onClick={() => value.pop(item)}>
            &#10094;
          </div>
          <div className="value">{value.length}</div>
          <div className="arrow" onClick={() => value.addItem(item)}>
            &#10095;
          </div>
        </div>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
