import styled from "styled-components";

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
    rgba(0, 0, 0, 0.4) 100%
  );

  h1 {
    align-self: center;
  }
  .leading {
    display: flex;
    gap: 0.75rem;
    .navbar-logo {
      height: 100%;
      img {
        height: 100%;
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
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
export default StyledNavbar;
