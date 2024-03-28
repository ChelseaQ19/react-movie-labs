import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )

  const [playlists, setPlaylists] = useState( [] )

  const [myReviews, setMyReviews] = useState( {} ) 

  const[credits, setCredits]= useState(null) //storing the movie credits


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
  
  
  
  
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromPlaylists = (movie) => {
    setPlaylists( favorites.filter(
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
      credits,
      addToPlaylist,
      addToFavorites,
      removeFromFavorites,
      removeFromPlaylists,
      addReview,
    }}
  >
    {props.children}
  </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;