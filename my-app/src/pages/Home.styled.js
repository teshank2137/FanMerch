import styled, { keyframes } from "styled-components";
import { hide, slideIn, shed, spacing } from "../utils/keyframes";

const StyledHome = styled.div`
  padding-top: 50px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .header {
    display: flex;
    align-items: center;
  }
  .title {
    font-size: 4rem;
    padding: 0.1rem;
    font-weight: 500;
    animation: ${spacing} 1.5s ease-out;
  }
  .logo {
    img {
      width: 8rem;
    }
    &:hover {
      animation: ${shed} 2s ease infinite;
    }
  }
  .socials {
    display: flex;
    transform-style: preserve-3d;
    animation: ${slideIn} 2s ease;
    align-items: center;
    .socials-item {
      padding: 0.5rem 0.75rem;
      svg {
        color: black;
        font-size: 2.5rem;
        transition: all 1s ease;
      }
      &:hover {
        transform: scale(1.2);
      }
      #twitch {
        width: 2rem;
      }
    }
  }
  .info {
    font-size: 1.2rem;
    padding: 0.25rem;
    font-weight: 500;
    text-align: center;
    animation: ${slideIn} 2s ease;
  }
  .btn {
    animation: ${slideIn} 2s ease;
  }
  .footer {
    position: absolute;
    bottom: 0;
    padding: 1rem;
    border-radius: 1rem 1rem 0 0;
    background: #fff6;
    animation: ${hide} 25s ease;
    opacity: 0;
  }

  @media (max-width: 480px) {
    .title {
      font-size: 2.5rem;
    }
    .logo {
      img {
        width: 5rem;
      }
    }
    .info {
      font-size: 1rem;
      padding: 0 0.5rem;
    }
    .footer {
      font-size: 0.75rem;
      padding: 0.5rem;
      text-align: center;
    }
  }
`;

export default StyledHome;
