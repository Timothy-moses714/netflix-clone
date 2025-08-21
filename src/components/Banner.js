import React, { useEffect, useState } from "react";
import { fetchData } from "../api";


const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function loadBanner() {
      const response = await fetchData("/trending/movie/day");
      const results = response.data.results;
      setMovie(results[Math.floor(Math.random() * results.length)]);
    }
    loadBanner();
  }, []);

  if (!movie) return null;

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${IMG_BASE_URL}${movie.backdrop_path})`,
      }}
    >
      <div className="banner__content">
        <h1>{movie.title}</h1>
        <p>{movie.overview?.substring(0, 150)}...</p>
      </div>
    </header>
  );
}
