import styled from "styled-components";
import StyledContainer from "../utils/StyledContainer";

const StyledDetails = styled(StyledContainer)`
  display: flex;
  min-height: 100vh;
  .item-image {
    width: 50%;
    display: flex;
    justify-content: center;
    img {
      width: 30vw;
      height: 30vw;
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
      margin: 0;
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
  @media (max-width: 786px) {
    flex-direction: column;
    .item-image {
      width: 100%;
      img {
        width: 350px;
        height: 350px;
      }
    }
    .item-details {
      padding: 1.25rem;
      width: 100%;
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }

      .item-price {
        font-size: 1.25rem;
      }

      .button-container {
        justify-content: center;
        margin-top: 0.25rem;
        flex-wrap: wrap;
      }
    }
  }
  @media (max-width: 480px) {
    .item-image {
      img {
        height: 250px;
        width: 250px;
      }
    }
  }
`;

export default StyledDetails;
