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
  }
`;
export default StyledLogin;
