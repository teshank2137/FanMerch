import styled from "styled-components";

const StyledCart = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    margin: 1rem;
    margin-bottom: 0;
  }
  .cart {
    margin: 0.5rem;
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
`;

export default StyledCart;
