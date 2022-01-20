import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { PrimaryButton } from "../utils/Buttons";
import { API_URL, headers } from "../utils/constants";
import Input from "../utils/Input.styled";
import StyledSignup from "./Signup.styled";
import updateToken from "../actionCreators/updateToken";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(true);
      setErrors([["Password dosen't match"]]);
      return;
    }
    let body = {
      email: email,
      username: email,
      password: password,
      first_name: name.split(" ")[0],
      last_name: name.split(" ", 2)[1],
    };
    try {
      let response = await fetch(API_URL + "/accounts/signup/", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
      let data = await response.json();
      if (data.status === "ok") {
        setError(false);
        setErrors([]);
        dispatch(updateToken(data.token));
        console.log("dispatched");
        navigation("/");
      } else if (response.status >= 400) {
        setError(true);
        setErrors(Object.values(data.data));
      }
      console.log(data);
    } catch {
      setErrors([...errors, ["Connection Lost"]]);
      setError(true);
    }
  };

  return (
    <StyledSignup>
      <h1>Signup</h1>

      <div className="signup-form">
        {error ? (
          <div className="errors">
            {errors.map((e) => (
              <li className="error-message">{e[0]}</li>
            ))}
          </div>
        ) : null}
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          className="signup-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="btn-group">
          <PrimaryButton onClick={handleSignup}>Signup</PrimaryButton>
        </div>
        <div
          className="login-btn"
          onClick={(e) => navigation("/account/login")}
        >
          Already a customer? Login Instead
        </div>
      </div>
    </StyledSignup>
  );
};

export default Signup;
