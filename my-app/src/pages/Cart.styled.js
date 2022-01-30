import styled from "styled-components";
import StyledContainer from "../utils/StyledContainer";

const StyledCart = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  h1 {
    margin: 1rem;
    margin-bottom: 0;
  }
  .cart-total {
    text-align: end;
  }

  .btn {
    align-self: flex-end;
    margin-right: 1rem;
  }
  .add-items {
    padding: 1rem;
    text-align: center;
    font-size: 1.25rem;
    h3 {
      padding: 1rem;
    }
  }

  @media (max-width: 380px) {
    .add-items {
      font-size: 1rem;
    }
    .cart-total {
      font-size: 1rem;
    }
  }
`;

export default StyledCart;
