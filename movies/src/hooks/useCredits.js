import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { getCredits } from "../api/tmdb-api" ;
import { useMovie } from "../hooks/useMovie";
import PageTemplate from "../components/templateMoviePage";
import { useCredits } from "../hooks/useCredits";


const MovieCreditsPage = (props) => {
  const { id } = useParams();
  const [ movie ] = useMovie(id);
  
  const [credit, setCredit] = useState([]);

  useEffect(() => {
    getCredits(movie.id).then((credits) => {
      setCredit(credits);
    })
    .catch((error) => {
     console.error("Error with credits", error);
    });
  }, [movie.id]);


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