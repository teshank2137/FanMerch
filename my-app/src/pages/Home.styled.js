import styled, { keyframes } from "styled-components";

const blink = keyframes`
0% {
    opacity: 0;
    }
50% {
    opacity: 1;
    }
100% {
    opacity: 0;
    }
`;

const StyledHome = styled.div`
  padding-top: 50px;
  position: relative;
  min-height: 100vh;
  .image-container {
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    img {
      transform: translateY(10%);
      object-fit: cover;
      width: 550px;
    }
  }
  .content {
    width: 50%;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    transform: translateY(-20%) translateX(20%);
    h2 {
      font-size: 2.5rem;
      margin-bottom: 8px;
    }
    .blink {
      font-size: 1.8rem;
      animation: ${blink} 1.5s linear infinite;
    }
  }
`;

export default StyledHome;
