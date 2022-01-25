import styled from "styled-components";

const StyledCheckout = styled.div`
  padding-top: 5rem;
  h1 {
    font-size: 2.5rem;
    margin: 1rem;
  }
  main {
    margin: 1rem;
    h2 {
      text-align: end;
      padding: 1rem;
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
      .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;
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
