import styled from "styled-components";
import loading from "../assets/loding.gif";

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  }
`;

const Loading = () => {
  return (
    <StyledLoading className="loading">
      <img src={loading} alt="loading" />
    </StyledLoading>
  );
};

export default Loading;
