import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import React , { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { MoviesContext } from "../../contexts/moviesContext";
import AddToPlaylistIcon from '../cardIcons/addToPlaylist';
import { getMovieChanges } from '../../api/tmdb-api'; //implementing the 'getMovieChanges' API

export default function MovieCard({ movie, action, credits  }) {
  const { favorites, addToFavorites, playlists, addToPlaylist } = useContext(MoviesContext);
  const [changes, setChanges] = useState([]); //adding the 'useState' for the movie changes
  

//using the 'useEffect' to fetch the data and the browser console.log to log results to see whether it has fetched the data or not
  useEffect(() => { 

    console.log("Fetching movie changes:", movie.id); //useState stores results of the API 
     getMovieChanges(movie.id).then((results)  => {
        console.log("Movie changes:", results);
        setChanges(results);
      })
      .catch((error) => {
        console.error("Error with movie changes:", error);
      }); //took some code from API's to catch errors.
  }, [movie.id]);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  if (playlists.find((id) => id === movie.id)) {
    movie.playlist = true;
  } else {
    movie.playlist = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    addToPlaylist(movie);
  };

 
  
  return (
    <Card sx={{ maxWidth: 345 }}>
       <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        //tweaked the playlist button so that when clicked it will turn to pink (same process as above)
        //Added 'action' element so that once clicked it will choose which action to be implemented
        //Links with the 'upcoming page', 'popular page', and 'top-rated' page
        action={
          movie.playlist ? (
            <Avatar sx={{ backgroundColor: 'pink' }}>
              <PlaylistAddIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p" fontFamily={"Arial"}>
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="secondary">
            More Info 
          </Button>
        </Link>
        <Link to={`/credits/${movie.id}`}> 
          <Button variant="outlined" size="medium" color="secondary">
            Movie Credits 
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

