import {useContext} from "react";
import MeetupList from "../components/layout/meetups/MeetupList";
import FavoriteContext from "../store/favorites-context";

const FavoritesPage = () => {
  const favoriteCtx = useContext(FavoriteContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>There Is No Favorite</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorite</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
