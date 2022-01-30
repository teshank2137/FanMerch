import styled from "styled-components";
import { fadeIn } from "./keyframes";

const StyledContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  margin: 0 1.5rem;
  padding-top: 5rem;
  min-height: 100vh;
  h1 {
    font-size: 2.5rem;
    margin: 1rem;
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 1.85rem;
    }
    margin: 0 0.75rem;
  }
`;

export default StyledContainer;
