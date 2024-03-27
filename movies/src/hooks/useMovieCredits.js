import React from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../components/templateMoviePage";
import useMovieCredits from "../hooks/useMovieCredits"


const MovieCreditsPage = (props) => {
  const { id } = useParams();
  const [credits] = useMovieCredits(id);

  return (
    <>
      {credits ? (
        <>
          <PageTemplate movie={credits}>
            <MovieCreditsPage credits={credits}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieCreditsPage;