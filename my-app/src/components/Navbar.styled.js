import styled from "styled-components";
import { shed } from "../utils/keyframes";

const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  justify-content: space-between;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );

  h1 {
    align-self: center;
  }
  .leading {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    cursor: pointer;
    .navbar-logo,
    img {
      height: 4.5rem;
      width: 4.5rem;
      padding: 0.2rem;
      &:hover {
        animation: ${shed} 2s infinite;
      }
    }
  }

  .navbar-menu {
    display: flex;
    margin-right: 1rem;
    align-items: center;
    .navbar-menu-item {
      margin-left: 0.8rem;
      padding: 0rem 0.5rem;
      cursor: pointer;
      transition: all 0.15s ease-out;
      svg {
        font-size: 2rem;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 480px) {
    .leading {
      .navbar-logo,
      img {
        width: 3rem;
        height: 3rem;
      }
    }
    h1 {
      font-size: 1.25rem;
    }
    .navbar-menu {
      .navbar-menu-item {
        padding: 0rem 0.2rem;
        svg {
          font-size: 1.75rem;
        }
      }
    }
  }
`;
export default StyledNavbar;
