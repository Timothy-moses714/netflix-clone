import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import { fetchData } from "../api";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);

  useEffect(() => {
    async function loadData() {
      const trendingData = await fetchData("/trending/movie/week");
      setTrending(trendingData.data.results);

      const topRatedData = await fetchData("/movie/top_rated");
      setTopRated(topRatedData.data.results);

      const actionData = await fetchData("/discover/movie?with_genres=28");
      setActionMovies(actionData.data.results);
    }
    loadData();
  }, []);

  return (
    <div className="home">
      <Banner />
      <Row title="Trending Now" movies={trending} />
      <Row title="Top Rated" movies={topRated} />
      <Row title="Action Movies" movies={actionMovies} />
    </div>
  );
}
