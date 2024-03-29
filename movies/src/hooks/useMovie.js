import React  from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";
import useRecommendations from "../hooks/UseRecommendations";

const MoviePage = (props) => {
  const { id } = useParams();

  const { movie } = useMovie(id);

  const [recommendations] = useRecommendations(id); //Passing the recommendations id

  return (
    <>
      {movie && recommendations ? ( //passing BOTH the movie and recommendations id to the page.
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} recommendations={recommendations}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;