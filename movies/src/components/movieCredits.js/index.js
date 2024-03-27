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


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const MovieCredits = ({ movie, credits, images }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

 return (
    <>
      <Typography variant="h5" component="h3" fontFamily={"Arial"}>
        Credits
      </Typography>

      <Typography variant="h5" component="h3" fontFamily={"Arial"}>
        Movie Credits
      </Typography>

      <Fab
        color="primary"
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
        <MovieCredits movie={movie} />
      </Drawer>  
      </>
  );
};
export default MovieCredits;