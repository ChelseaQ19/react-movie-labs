import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";
import { getRecommendations } from "../api/tmdb-api";
import { getSimilar } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const MoviePage = (props) => {
  const { id } = useParams();



  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );


  const { data: recommendations, reciserror, recisLoading, recisError } = useQuery(
    ["recommendations", { id: id }],
    getRecommendations
  );

  
  if (isLoading || recisLoading ) {//Adding the 'videos' and OR operator for the spinner. If both are false, then the spinner will not render.
    return <Spinner />;
  };

  if (isError || recisLoading ) { //Adding the 'recommendations' and OR operator for the error to display either or.
    return <h1>{ isError ? error.message : recisError ? reciserror.essage: 'Error'}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} recommendations={recommendations} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details and recommendations</p>
      )}
    </>
  );
};

export default MoviePage;