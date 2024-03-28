import React from "react";
import { useParams } from 'react-router-dom';
import { getCredits } from "../api/tmdb-api" 
import PageTemplate from "../components/templateMoviePage";
import { useCredits } from "../hooks/useCredits";


const MovieCreditsPage = (props) => {
  const { id } = useParams();
  const [ movie ] = useCredits(id);


  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
          
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie credits</p>
      )}
    </>
  );
};

export default MovieCreditsPage;