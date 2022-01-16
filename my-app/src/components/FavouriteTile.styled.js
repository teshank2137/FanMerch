import styled from "styled-components";

const HEIGHT = "25rem";
const WIDTH = "20rem";

const StyledFavTile = styled.div`
  cursor: pointer;
  position: relative;
  height: ${HEIGHT};
  width: ${WIDTH};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: 1rem;
  transition: all 0.3s ease-in-out;

  img,
  .image {
    height: ${HEIGHT};
    width: ${WIDTH};
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: ${WIDTH};
    height: ${HEIGHT};
    position: absolute;
    opacity: 0;
    transition: all 0.25s;
    padding: 1rem;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    .title {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .price {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
  &:hover {
    transform: scale(1.05);
    .content {
      opacity: 1;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0.9) 100%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }
`;

export default StyledFavTile;
