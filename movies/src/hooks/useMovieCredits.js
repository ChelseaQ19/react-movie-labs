import React from "react";
import { useParams } from 'react-router-dom';
import { useMovie } from "../api/tmdb-api" //retrieving the useMovie API
import { getMovieCreditImages } from "../api/tmdb-api";
import PageTemplate from "../components/templateMoviePage";
import useMovieCredits from "../hooks/useMovieCredits"


const MovieCreditsPage = (props) => {
  const { id } = useParams();
  const [ credits ] = useMovieCredits(id);

  return (
    <>
      {credits ? (
        <>
          <PageTemplate movieCredits={credits}>
          
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieCreditsPage;