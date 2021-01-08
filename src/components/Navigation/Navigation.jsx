import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/profile"
              className={classes.link}
              activeClassName={classes.active}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={classes.link}
              activeClassName={classes.active}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dialogs"
              className={classes.link}
              activeClassName={classes.active}
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={classes.link}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/music" className={classes.link}>
              Music
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={classes.link}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
