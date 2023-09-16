import React, { useState } from "react";
import Logo from "../assets/mobox.png";
import { LiaSignInAltSolid } from "react-icons/lia";
import Icon from "../assets/imdb-icon.svg";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";

function FeaturedMovie({ movies }) {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const prevMovie = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const nextMovie = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Check if there are movies available
  if (movies.length === 0) {
    return <p>No movies available.</p>;
  }

  const movie = movies[currentMovieIndex];

  return (
    <div className="relative bg-white  overflow-hidden h-[600px]">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-full object-cover "
      />
      {/* Movie details and navigation */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 text-white">
        <div>
          <div className="flex justify-between">
            <div className="flex gap-4 mb-20">
              <img src={Logo} alt="logo" width={30} />
              <p>MovieBox</p>
            </div>

            {/* search */}
            <div>
              <input
                type="text"
                placeholder="Search for movies..."
                className="w-full px-36 py-2 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* sign in */}
            <div className="flex gap-2">
              <p>Sign in</p>
              <LiaSignInAltSolid size={20} />
            </div>
          </div>

          <h2 className="text-2xl font-semibold">{movie.title}</h2>
          <div className="flex gap-2 mt-5">
            <img src={Icon} alt="icon" width={20} />
            <p>{movie.popularity}</p>
          </div>
          <div className="w-[450px] mt-8">
            <p>{movie.overview}</p>
            <button className="text-white mt-2 rounded-md bg-red-700 px-4 text-[12px]">
              WATCH TRAILER
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={prevMovie}
            className="bg-teal-100 text-white px-3 py-1 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            <IoMdArrowBack size={20} />
          </button>
          <button
            onClick={nextMovie}
            className="bg-teal-100 text-white px-3 py-1 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            <GrLinkNext size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMovie;
