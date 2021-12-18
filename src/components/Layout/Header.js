import React, { Fragment } from "react";
import Meal from "../../assets/image/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Rita's Meals</h1>
        <HeaderCartButton ShowCart={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Meal} alt="meal" />
      </div>
    </Fragment>
  );
};

export default Header;
