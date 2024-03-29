import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from '@mui/material/Pagination';

const HomePage = ({props}) => {
 
  
  const [page, setPage] = useState(1); //this is page 1
  const { data, error, isLoading, isError } = useQuery(['discover', page], () => getMovies(page)); //it will execute the data and fetch it from getMovies

  const  handleChangePage=(event, newPage) => { //like the buttons, I added a similar handleChange event so that when a new page is clicked, it will create a new page
     setPage(newPage);

  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;
  const favorites = movies.filter(m => m.favorite);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  const addToFavorites = (movieId) => true;

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
      
      <Pagination count={7} color="secondary" onChange={handleChangePage} /> 
    </>
  );
};

export default HomePage;