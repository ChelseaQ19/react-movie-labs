import React, { useState, useEffect } from "react";
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
import { useQuery } from "react-query";
import { getCredits } from "../../api/tmdb-api"


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const MovieCredits = ({ movie ,images }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [credits, setCredits] = useState([]);

  useEffect(() => { 

    if (movie.id) { 
    getCredits(movie.id).then((results)  => {
       setCredits(results);
     });
   }
    
  }, [movie]);

 return (
    <>
      <Typography variant="h5" component="h3" fontFamily={"Arial"}>
        Credits
      </Typography>

      <Typography variant="h5" component="h3" fontFamily={"Arial"}>
        Movie Credits
       {credits && 
       credits.map((credit) =>
       <li key={credit.id}>
        <Chip label={credit.title} sx={{ margin: 0.1}} />
       </li>
       )}
      </Typography>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          fontFamily: 'Arial',
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
export default MovieCredits;