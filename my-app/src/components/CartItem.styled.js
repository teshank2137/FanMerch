import styled from "styled-components";

const StyledCartItem = styled.div`
  border: 1px solid #fff4;
  border-radius: 4px;
  background: #9991;
  margin: 0.5rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  height: 10rem;
  img {
    object-fit: cover;
    width: 10rem;
  }
  .item-details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .main {
      .title {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .price {
        font-size: 1.25rem;
        font-weight: bold;
        margin-top: 0.5rem;
      }
    }
    .quantity {
      align-self: center;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .value {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .arrow {
        cursor: pointer;
        font-size: 1.25rem;
      }
    }
  }
`;

export default StyledCartItem;
