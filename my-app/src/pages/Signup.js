import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../utils/Buttons";
import Input from "../utils/Input.styled";
import StyledSignup from "./Signup.styled";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <StyledSignup>
      <h1>Signup</h1>
      <div className="signup-form">
        <Input
          className="signup-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className="signup-input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="signup-input"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          className="signup-input"
          type="text"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="btn-group">
          <PrimaryButton>Signup</PrimaryButton>
        </div>
      </div>
    </StyledSignup>
  );
};

export default Signup;
