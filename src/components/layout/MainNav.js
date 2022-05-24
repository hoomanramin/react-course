import {Link} from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link to={"/newmeet"}>New Meetup</Link>
          </li>
          <li>
            <Link to={"/favorite"}>Favorite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
