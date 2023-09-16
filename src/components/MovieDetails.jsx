// MovieDetail.js

import React from "react";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { PiVideoLight } from "react-icons/pi";
import { MdOutlineUpcoming } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import Logo from "../assets/mobox.png";

function MovieDetails({ movie }) {
  return (
    <div className=" sm:flex sm:gap-4">
      <div className="w-[200px] p-3 rounded-r-2xl border px-4 border-slate-400 ">
        <div className="mt-2 flex gap-4">
          <img src={Logo} alt="logo" width={30} className="ml-2" />
          <p className="font-bold text-xl">MovieBox</p>
        </div>
        <div className="flex gap-2 mb-2 mt-20">
          <p>
            <Link to="/">
              <CiHome size={20} />
            </Link>
          </p>
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>

        <div className="flex gap-2 mt-10">
          <p>
            <Link to="/">
              <BiCameraMovie size={20} />
            </Link>
          </p>
          <p>
            <Link to="/">Movies</Link>
          </p>
        </div>

        <div className="flex gap-2 mt-10">
          <p>
            <Link to="/">
              <PiVideoLight size={20} />
            </Link>
          </p>
          <p>
            <Link to="/">TV Series</Link>
          </p>
        </div>

        <div className="flex gap-2 mt-10">
          <p>
            <Link to="/">
              <MdOutlineUpcoming size={20} />
            </Link>
          </p>
          <p>
            <Link to="/">Upcoming</Link>
          </p>
        </div>

        <div className="rounded-xl w-[150px] mt-16 border border-red-500 p-4 bg-red-50">
          <p className="text-[14px] mb-2 font-bold">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[10px]">50k people are playing now</p>
          <button className="px-5 text-red-500 font-bold bg-red-300 mt-2 text-[10px] rounded-2xl">
            Start playing
          </button>
        </div>

        <div className="flex gap-2 mt-24 text-black mb-6">
          <p>
            <Link to="/">
              <TbLogout size={20} />
            </Link>
          </p>
          <p>
            <Link to="/">Log out</Link>
          </p>
        </div>
      </div>
      <div className="mx-3 my-5 rounded-lg ">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
          alt={movie.title}
          // className="max-w-[min(400px,90%)] md:h-[300px]"
          className="w-full"
        />
        <div className="mt-4 mb-4 flex justify-among gap-4">
          <h4 className="text-xl font-semibold">{movie.title}</h4>
          <p className="font-medium mt-1">.{movie.release_date}</p>
          <p className="font-medium mt-1">.{movie.runtime} minutes</p>
        </div>
        <div>
          <div className="w-[900px]">
            <p>{movie.overview}</p>
          </div>
        </div>

        <div className="mt-10">
          <p>
            Director: <span className="text-red-700">Emmanuel</span>
          </p>
          <p className="mt-8">
            Writer: <span className="text-red-700">Emmanuel</span>
          </p>
        </div>

        <div>
          <button className="rounded-lg bg-red-600 text-white mt-10 py-1">
            Top rated movies
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
