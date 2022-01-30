import styled from "styled-components";

const StyledCartItem = styled.div`
  border: 1px solid #fff4;
  border-radius: 4px;
  background: #fff2;
  backdrop-filter: blur(10px);
  box-shadow: 4px 4px 9px #bebebe33, -4px -4px 9px #ffffff33;
  margin: 0.5rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  height: 10rem;
  img {
    object-fit: cover;
    width: 10rem;
    @media (max-width: 350px) {
      width: 8rem;
    }
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
    @media (max-width: 480px) {
      flex-direction: column;
      .main {
        .title {
          font-size: 1rem;
        }
        .price {
          font-size: 0.85rem;
        }
        .Qt {
          font-size: 0.8rem;
        }
      }
      .quantity {
        align-self: flex-end;
        .value {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default StyledCartItem;
