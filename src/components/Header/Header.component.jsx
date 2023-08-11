import React from "react";
import classes from "./Header.module.css";
import NavigationComponent from "./Navigation.component";
const HeaderComponent = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Normal Web Page</h1>
      <NavigationComponent onLogout={props.onLogout} />
    </header>
  );
};

export default HeaderComponent;
