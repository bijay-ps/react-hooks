import React, { useEffect, useState } from "react";
import classes from "./Login.module.css";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isBtnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (email.length > 7 && password.length >= 8) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [email, password]);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin();
  };

  return (
    <div className={`${classes.card} ${classes.login}`}>
      <form onSubmit={submitHandler}>
        <h3>Login</h3>
        <div className={`${classes.control}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <button
            type="submit"
            className={classes.button}
            disabled={isBtnDisabled}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
