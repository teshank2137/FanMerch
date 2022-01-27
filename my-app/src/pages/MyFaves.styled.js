import styled from "styled-components";

const StyledFave = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  h1 {
    z-index: 1;
    font-size: 3rem;
    margin: 5rem 3rem 2rem 3rem;
  }
  .contents {
    justify-self: center;
    display: flex;
    align-items: center;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 1rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .slide-btn {
    background: #26262600;
    border: none;
    color: #fff;
    opacity: 1;
    transition: all 0.15s ease-in-out;
    &:hover {
      background: #262626bb;
    }
  }
  .fav-container {
    position: relative;
  }
  .slide-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 2.5rem;
    z-index: 5;
  }
  .right {
    right: 0;
  }
`;

export default StyledFave;
