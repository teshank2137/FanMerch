import styled from "styled-components";

const StyledItem = styled.div`
  .item-container {
    margin: 1rem auto;
    padding: 1rem;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
      object-fit: cover;
      border-radius: 0.75rem;
    }
    .item-info {
      h3 {
        font-size: 1.25rem;
      }
      p {
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
  @media (max-width: 786px) {
    .item-container {
      margin: 0.5rem auto;
    }
  }
  @media (max-width: 480px) {
    .item-container {
      margin: 0.25rem auto;
      .item-info {
        h3 {
          font-size: 1rem;
        }
        p{
          font-size: 0.8rem;
        }
      }
    }
`;

export default StyledItem;
