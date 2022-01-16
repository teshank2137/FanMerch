import { useState } from "react";
import { PrimaryButton } from "../utils/Buttons";
import StyledLogin from "./login.styled";
import Input from "../utils/Input.styled";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <StyledLogin>
      <h1>Login</h1>
      <div className="login-form">
        <Input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btn-group">
          <PrimaryButton onClick={console.log(`${username}, ${password}`)}>
            Login
          </PrimaryButton>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
