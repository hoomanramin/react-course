import {useContext} from "react";
import Card from "../../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoriteContext from "../../../store/favorites-context";

const MeetupItem = ({image, title, address, description, id}) => {
  const favoriteCtx = useContext(FavoriteContext);
  const isFavorite = favoriteCtx.isFavorite(id);
  const toggleFavorite = () => {
    if (isFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite({
        id,
        title,
        description,
        address,
        image,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>
            {isFavorite ? "Remove From Favorite" : "To Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
