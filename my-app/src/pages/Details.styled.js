import styled from "styled-components";

const StyledDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  .item-image {
    width: 50%;
    display: flex;
    justify-content: center;
    img {
      width: 80%;
      height: 75vh;
      object-fit: cover;
      border-radius: 0.75rem;
    }
  }
  .item-details {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-right: 1rem;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.25rem;
      padding: 0.5rem;
      padding-left: 0;
    }
    .item-price {
      font-weight: bold;
      font-size: 1.75rem;
    }
    .size-selector {
      display: flex;
      width: 100%;
      align-items: center;
      select {
        margin-left: 0.5rem;
        border: none;
        border-radius: 5px;
        padding: 0.5rem;
      }
    }
    .button-container {
      margin-top: 5rem;
      display: flex;

      .buy {
        margin-left: 1rem;
      }
    }
  }
`;

export default StyledDetails;
