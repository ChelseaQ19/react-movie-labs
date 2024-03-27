import React from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../components/templateMoviePage";
import { getMovieCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const MovieCreditsPage = (props) => {
  const { id } = useParams();

  const { data:  credits, creditsiserror, creditsisLoading, creditsisError } = useQuery(
    ["credits", { id: id }],
    getMovieCredits
  );


  if (creditsisLoading  ) {//Adding the 'videos' and OR operator for the spinner. If both are false, then the spinner will not render.
    return <Spinner />;
  };

  if (creditsisLoading ) { //Adding the 'recommendations' and OR operator for the error to display either or.
    return <h1>{ creditsisError ? creditsiserror.message : 'Error'}</h1>;
  }

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
