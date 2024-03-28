import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";
import { getCredits } from "../api/tmdb-api"; 
import { getMovieCreditImages } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const MovieCreditsPage = (props) => {
  const { id } = useParams();
  

  const { data:  credits, creditsiserror, creditsisLoading, creditsisError } = useQuery(
    ["credits", { id: id }],
    getCredits
  );

  const { data:  movie, iserror,  isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data:  images, imagesiserror,  imagesisLoading, imagesisError } = useQuery(
    ["images", { id: id }],
    getMovieCreditImages
  );

 


  if (creditsisLoading || isLoading || imagesisLoading ) {//Adding the 'videos' and OR operator for the spinner. If both are false, then the spinner will not render.
    return <Spinner />;
  };

  if (creditsisLoading || isLoading || imagesisLoading ) { //Adding the 'recommendations' and OR operator for the error to display either or.
    return <h1>{ creditsisError ? creditsiserror.message : isError ? iserror.message : imagesisError ? imagesiserror.message :'Error'}</h1>;
  }


  return (
    <>
      {movie ? (
        <>
         <PageTemplate movie={movie} credits={credits} images={images}>
      
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for Credits</p>
      )}
    </>
  );
};

export default MovieCreditsPage;
