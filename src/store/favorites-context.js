import {createContext, useState} from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: favoriteMeetup => {},
  removeFavorite: meetupId => {},
  isFavorite: meetupId => {},
});

export const FavoritesContextProvider = ({children}) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = favoriteMeetup => {
    setUserFavorites(pervUserFavorites => {
      return pervUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoritesHandler = meetupId => {
    setUserFavorites(pervUserFavorites => {
      return pervUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  };

  const itemIsFavoritesHandler = meetupId => {
    return userFavorites.some(meetup => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoritesHandler,
    isFavorite: itemIsFavoritesHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
