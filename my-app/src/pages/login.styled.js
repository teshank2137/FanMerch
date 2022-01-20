import styled from "styled-components";

const StyledLogin = styled.div`
  height: 100vh;
  padding-top: 5rem;
  h1 {
    font-size: 2.5rem;
    margin: 1rem;
    text-align: center;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 100%;
    .login-input {
      margin: 1rem;
    }
    .btn-group {
      display: flex;
      justify-content: space-between;
      margin-left: 0.5rem;
    }
    .signup-btn {
      cursor: pointer;
    }
  }
  .errors {
    border: 2px dashed red;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
`;
export default StyledLogin;
