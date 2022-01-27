import styled from "styled-components";

export const UnStyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Button = styled(UnStyledButton)`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.3s;
  text-transform: uppercase;
  text-align: center;

  &:active {
    transform: scale(0.9);
  }
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const PrimaryButton = styled(Button)`
  background-image: linear-gradient(
    to right,
    #02aab0 0%,
    #00cdac 51%,
    #02aab0 100%
  );
  background-size: 200% auto;
  color: white;
  &:hover {
    background-position: right center;
    text-decoration: none;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const SecondaryButton = styled(Button)`
  border: 3px solid;
  border-color: #02aab0;
  &:hover {
    border-color: #00cdac;
  }
  &:active {
    transform: scale(0.9);
  }
`;
