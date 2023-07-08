import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      console.log(passwordAgain.current.value, password.current.value);
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <TextField
              id="outlined-basic"
              label="username"
              variant="outlined"
              required
              inputRef={username}
            />
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              type="email"
              required
              inputRef={email}
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              required
              inputProps={{ minLength: 6 }}
              inputRef={password}
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              required
              inputProps={{ minLength: 6 }}
              inputRef={passwordAgain}
            />
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
            <Button
              variant="contained"
              color="success"
              style={{ width: "fit-content", margin: "auto" }}
            > 
              Log into account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
