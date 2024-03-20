import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )

  const [playlists, setPlaylists] = useState( [] )

  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addToPlaylist = (movie) => {
    let newPlaylists = [];
    if (!playlists.includes(movie.id)){
      newPlaylists = [...playlists, movie.id];
    }
    else{
      newPlaylists = [...favorites];
    }
    setPlaylists(newPlaylists)
  };
  
  
  
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };


  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
 

  return (
    <MoviesContext.Provider
    value={{
      favorites,
      playlists,
      addToPlaylist,
      addToFavorites,
      removeFromFavorites,
      addReview,
    }}
  >
    {props.children}
  </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;