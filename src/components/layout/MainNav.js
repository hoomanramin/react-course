import {useContext} from "react";
import {Link} from "react-router-dom";
import classes from "./MainNav.module.css";
import FavoriteContext from "../../store/favorites-context";

const MainNav = () => {
  const favoriteCtx = useContext(FavoriteContext);
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
            <Link to={"/favorite"}>
              My Favorite{" "}
              <span className={classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
