import React, { useContext } from "react";
import classes from "./Home.module.css";
import LoginContext from "../../ctx/loginContext";

const Home = (props) => {
  const ctx = useContext(LoginContext);
  return (
    <div className={`${classes.card} ${classes.home}`}>
      <h1>Welcome back!</h1>
      <button className={classes.button} onClick={ctx.onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
