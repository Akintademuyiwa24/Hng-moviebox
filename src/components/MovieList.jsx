import React from "react";
import MovieCard from "./MovieCard";
import { GrLinkNext } from "react-icons/gr";

const MovieList = ({ movies }) => {
  return (
    <div className="mt-[100px] sm:mx-28">
      <div className="flex justify-between">
        <h3 className="text-3xl font-semibold">Featured Movies</h3>
        <div className="flex gap-2 text-red-500">
          <p>See more</p>
          <GrLinkNext size={20} className="text-red-500" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
