// Home.js

import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

import axios from "axios"; // Import Axios
import FeaturedMovie from "../components/FeaturedMovie";
import Footer from "../components/Footer";

function Home() {
  const [movies, setMovies] = useState([]);

  const fetchTopRatedMovies = async () => {
    try {
      const apiKey = "42afe5460a6dd91d46af6cc8cf5c3a3e"; // Replace with your actual API key
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`
      );
      const top10Movies = response.data.results.slice(0, 10);
      setMovies(top10Movies);
      console.log(top10Movies);
    } catch (error) {
      console.error("Error fetching top-rated movies:", error);
    }
  };

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  return (
    <div>
      <FeaturedMovie movies={movies} />

      {/* <SearchBar onSearch={(search) => console.log("Search query:", search)} /> */}
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default Home;
