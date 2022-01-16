import styled from "styled-components";

const StyledItem = styled.div`
  .item-container {
    margin: 1rem auto;
    padding: 1rem;
    cursor: pointer;
    img {
      width: 25rem;
      height: 25rem;
      object-fit: cover;
    }
    .item-info {
      h3 {
        font-size: 1.5rem;
        &:hover {
          color: #f00;
        }
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
        width: 100%;
        height: auto;
      }
    }
  }
`;

export default StyledItem;
