import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useContext, useRef } from "react";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
          <div className="loginBox">
            <form onSubmit={handleClick} className="loginBox">
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
              <button className="loginButton" disabled={isFetching}>
                {isFetching ? (
                  <CircularProgress style={{ color: "white" }} />
                ) : (
                  "Log In"
                )}
              </button>
            </form>
            <span className="loginForgot">Forgot Password?</span>
            <Button variant="contained" color="success" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress style={{ color: "white" }} />
              ) : (
                "Create a New Account"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
