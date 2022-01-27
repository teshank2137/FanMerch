import styled from "styled-components";
import StyledContainer from "../utils/StyledContainer";

const StyledCheckout = styled(StyledContainer)`
  h1 {
    font-size: 2.5rem;
    margin-left: 0;
  }
  main {
    h2 {
      text-align: end;
      padding: 0 0 1rem 0;
      font-size: 1rem;
      font-weight: normal;
      .total {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
    form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        grid-column: span 1;
      }
      #address {
        grid-column: span 2;
      }
      .checkbox {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
      }
    }
  }
`;
export default StyledCheckout;
