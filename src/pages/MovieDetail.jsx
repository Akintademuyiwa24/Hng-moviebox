// MovieDetailPage.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import axios from "axios";

function MovieDetail() {
  // Use useParams to get the movie ID from the URL
  const { id } = useParams();

  // Define a state variable to store the movie details
  const [movie, setMovie] = useState(null);

  // Define a function to fetch movie details by ID
  const fetchMovieDetails = async () => {
    const apiKey = "42afe5460a6dd91d46af6cc8cf5c3a3e";

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      // Replace 'YOUR_API_KEY' with your actual API key
      setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  // Call the fetchMovieDetails function when the component mounts
  useEffect(() => {
    fetchMovieDetails();
  }, [id]); // Re-fetch when the movie ID changes

  return (
    <div>
      {movie ? <MovieDetails movie={movie} /> : <p>Loading movie details...</p>}
    </div>
  );
}

export default MovieDetail;
