import styled from "styled-components";

const Input = styled.input`
  height: 2rem;
  padding: 1.5rem 1rem;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.25rem;
  border-radius: 6px;
  background: #fff1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  &::placeholder {
    color: #fffa;
  }

  border: 1px solid #fff5;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export default Input;
