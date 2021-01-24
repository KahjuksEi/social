import logo from "./logo.svg";
import classes from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>MEGA REACT SAMURAI PROJECT</h2>
      <nav>
        <ul>
          <li>
            <a href="#" className={classes.link}>
              Profile
            </a>
          </li>
          <li>
            <a href="#" className={classes.link}>
              Messages
            </a>
          </li>
          <li>
            <a href="#" className={classes.link}>
              Friends
            </a>
          </li>
          <li>
            <a href="#" className={classes.link}>
              Groups
            </a>
          </li>
        </ul>
      </nav>
      <div className="">
        {props.auth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
