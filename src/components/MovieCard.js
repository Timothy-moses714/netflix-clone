import React from "react";
import { Link } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        className="movie-card__poster"
        src={`${IMG_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <p className="movie-card__title">{movie.title}</p>
    </Link>
  );
}
