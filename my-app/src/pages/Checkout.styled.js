import styled from "styled-components";
import StyledContainer from "../utils/StyledContainer";

const StyledCheckout = styled(StyledContainer)`
  padding-bottom: 2.5rem;
  min-height: 100vh;
  h1 {
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
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem;
    background: #fff6;
    border-radius: 1rem 1rem 0 0;
    li {
      list-style: none;
    }
  }
  @media (max-width: 786px) {
    main {
      form {
        grid-template-columns: 1fr;
        #address {
          grid-column: span 1;
        }
      }
    }
  }
  @media (max-width: 480px) {
    main {
      h2 {
        font-size: 0.85rem;
        .total {
          font-size: 1.35rem;
        }
      }
      form {
        .form-group {
          label {
            font-size: 0.85rem;
          }
        }
      }
    }
  }
`;
export default StyledCheckout;
