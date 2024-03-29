import React, {useEffect, useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import { getSimilar } from "../../api/tmdb-api";
import { getRecommendations } from "../../api/tmdb-api";
import { useParams } from "react-router-dom";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Passing the 'recommendations' ID
  const { id }= useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [similar, setSimilar] = useState([]);
  const [recommendations, setRecommendations] = useState([]); 

  
useEffect(() => { 

   if (movie) { 
   getSimilar(movie.id).then((results)  => {
      setSimilar(results);
    });
  }
   
}, [movie]);

useEffect(() => { 

  if (movie) { 
  getRecommendations(movie.id).then((results)  => {
     setRecommendations(results);
   });
 }
  
}, [movie]);



return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="secondary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      
      <Paper component="ul" sx={{ ...root }} >
  
      {similar.map((similarMovie) => (
          <li key={similarMovie.id}>
            <Chip label={similarMovie.title} sx={{...chip}} /> 
          </li>
        ))}
   
      </Paper>

      <Paper component="ul" sx={{ ...root }} >

      <Typography variant="h5" component="h3">
        Recommendations
      </Typography>
    {recommendations.map((recommendation) => 
    <li key={recommendations.id}>
       <Typography variant="h5" component="h3">
         Title: {recommendation.title}
      </Typography>
      <Typography variant="h5" component="h3">
         Overview: {recommendation.overview}
      </Typography>
    </li>
    )}

  </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>  
      </>
  );
};
export default MovieDetails ;