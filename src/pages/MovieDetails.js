import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function loadMovie() {
      const response = await fetchData(`/movie/${id}`);
      setMovie(response.data);
    }
    loadMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <img
        src={`${IMG_BASE_URL}${movie.backdrop_path}`}
        alt={movie.title}
        className="movie-details__banner"
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}/10</p>
    </div>
  );
}
