import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const MovieHeader = (props) => {
  const movie = props.movie;
  const navigate = useNavigate();

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)} >
        <ArrowBackIcon color="secondary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3" fontFamily={"Arial"}>
        {movie.title}
        <a href={movie.homepage}>
          <HomeIcon color="secondary" />
        </a>
        <br />
        <span sx={{ fontSize: "1.5rem", fontFamily: "Arial"}}>{`   "${movie.tagline}"`} </span>
      </Typography>

      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowForwardIcon color="secondary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;