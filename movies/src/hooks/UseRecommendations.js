import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import useRecommendations from "../hooks/UseRecommendations";

const MoviePage = (props) => {
  const { id } = useParams();
  const [recommendations] = useRecommendations(id);

  return (
    <>
      {recommendations? (
        <>
          <PageTemplate>
            <MovieDetails recommendations={recommendations}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;