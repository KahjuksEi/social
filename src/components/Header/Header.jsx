import logo from "./logo.svg";
import classes from "./Header.module.css";
function Header() {
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
    </header>
  );
}

export default Header;
