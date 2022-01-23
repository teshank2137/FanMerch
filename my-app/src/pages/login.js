import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { API_URL, headers } from "../utils/constants";
import updateToken from "../actionCreators/updateToken";
import { PrimaryButton } from "../utils/Buttons";
import StyledLogin from "./login.styled";
import Input from "../utils/Input.styled";
import loginUser from "../actionCreators/login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    let body = {
      username: username,
      password: password,
    };
    try {
      let response = await fetch(API_URL + "/accounts/token/", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
      let data = await response.json();
      if (response.status < 400) {
        setError(false);
        setErrors();
        dispatch(updateToken(data));
        dispatch(loginUser());
        console.log("dispatched");
        console.log(location);
        navigation(location.state ? location.state.from.pathname : "/");
        // navigation("/");
      } else if (response.status >= 400) {
        setError(true);
        setErrors("Incorrect Credentials");
      }
    } catch {
      setErrors("Connection Lost");
      setError(true);
    }
  };
  return (
    <StyledLogin>
      <h1>Login</h1>
      <div className="login-form">
        {error ? <div className="errors">{errors}</div> : null}
        <Input
          className="login-input"
          type="text"
          placeholder="Email"
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
          <PrimaryButton onClick={handleLogin}>Login</PrimaryButton>
        </div>
        <div
          className="signup-btn"
          onClick={(e) => navigation("/account/signup")}
        >
          New User? Signup here
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
