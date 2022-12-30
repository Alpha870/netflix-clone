import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Row.css";

const mover = (event) => {
  event.preventDefault();
  window.scrollBy(100, 0);
}

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);


  return (
    <div className="div-general">
      
      <h6 className="h4-row">{title}</h6>
      <div onClick={mover} className="div-poster">
        {movies.map((movie) => (
          <img
            className="poster-row"
            key={movie.id}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Row;
