import styled from "styled-components";
import StyledContainer from "../utils/StyledContainer";

const StyledSignup = styled(StyledContainer)`
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1rem;
    text-align: center;
  }

  .errors {
    border: 2px dashed red;
    border-radius: 0.5rem;
    padding: 1rem;
    .error-message {
      list-style: none;
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
  .signup-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    .signup-input {
      margin: 1rem;
    }
    .btn-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem;
    }
    .login-btn {
      cursor: pointer;
    }
  }
`;

export default StyledSignup;
