import styled from "styled-components";
import StyledContainer from "../utils/StyledContainer";

const StyledShop = styled(StyledContainer)`
  h1 {
    margin: 1rem;
  }
  .shop-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
    .shop-sort {
      display: flex;
      align-items: center;

      select {
        margin-left: 0.5rem;
        padding: 0.5rem;
        height: 2rem;
        background: #303030;
        border: none;
        color: #fff;
        font-weight: bold;
        &:focus {
          outline: none;
        }
        option {
          background-color: #303030;
          padding: 0.5rem;
          opacity: 0.5;
        }
      }
    }
  }
  .shop-list {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    @media (max-width: 905px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.35rem;
    }

    @media (max-width: 786px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.25rem;
    }
  }
  @media (max-width: 480px) {
    .shop-header {
      margin-right: 0;
      .shop-sort {
        select {
          padding: 0.25rem;
        }
        p,
        option {
          font-size: 0.85rem;
        }
      }
    }
  }
`;

export default StyledShop;
