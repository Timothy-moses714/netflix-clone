import React, { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const res = await axios.get(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}`
        );
        setSearchResults(res.data.results);
      } catch (err) {
        console.error("Search error:", err);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">Netflix Clone</div>

      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleSearch}
        className="navbar__search"
      />

      {/* Search results dropdown */}
      {searchResults.length > 0 && (
        <div className="navbar__search-results">
          {searchResults.slice(0, 10).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </nav>
  );
}
