import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";
import { getMovieCredits } from "../api/tmdb-api"; //fetching the Movie Credits
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const MoviePage = (props) => {
  const { id, creditsid } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: credits, error: creditsError, isLoading: creditsisLoading, isError: creditsisError } = useQuery(
    ["credits", { id: id }],
    getMovieCredits //creating ID for movie credits
  );

  if (isLoading || creditsisLoading ) {//Adding the 'credits' and OR operator for the spinner. If both are false, then the spinner will not render.
    return <Spinner />;
  }

  if (isError || creditsisError) { //Adding the 'credits' and OR operator for the error to display either or.
    return <h1>{ isError ? error.message : creditsisError ?  creditsError.message: 'Error'}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} credits={credits} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;