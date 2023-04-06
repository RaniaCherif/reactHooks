import React from "react";
import MovieCard from "../movieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className='list'>
      {movies.map((el) => (
        <MovieCard el={el}></MovieCard>
      ))}
    </div>
  );
};
export default MovieList;
