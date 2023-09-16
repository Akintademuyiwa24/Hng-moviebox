import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 hover:scale-110">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto"
        />
        <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
      </Link>
      <p className="text-gray-500">{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
