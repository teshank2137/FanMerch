import styled from "styled-components";

const StyledItem = styled.div`
  .item-container {
    margin: 1rem auto;
    padding: 1rem;
    cursor: pointer;
    img {
      width: 20rem;
      height: 20rem;
      object-fit: cover;
      border-radius: 0.75rem;
    }
    .item-info {
      h3 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
  @media (max-width: 786px) {
    .item-container {
      margin: 0.5rem auto;

      img {
        width: 15rem;
        height: 15rem;
      }
    }
  }
`;

export default StyledItem;
