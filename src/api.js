import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchData = (endpoint) => {
  return instance.get(endpoint, {
    params: { api_key: process.env.REACT_APP_TMDB_API_KEY },
  });
};

export default instance;
