import React from "react";
import Typography from "@mui/material/Typography";

const MovieReview =  ({ review }) => {
  return (
    <>
      <Typography variant="h5" component="h3" fontFamily={"Arial"}>
        Review By: {review.author}
      </Typography>

      <Typography variant="h6" component="p" fontFamily={"Arial"}>
        {review.content} 
      </Typography>
    </>
  );
};
export default MovieReview