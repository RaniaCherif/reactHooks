import React from "react";
import { useState } from "react";
import "./addMovie.css";

const AddMovie = ({ addNewMovie }) => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    img: "",
    rate: "",
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    addNewMovie(inputs);
  };
  return (
    <div>
      <input
        className="movie"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <input
        className="movie"
        placeholder="Description"
        name="description"
        onChange={handleChange}
      />
      <input
        className="movie"
        placeholder="Image"
        name="img"
        onChange={handleChange}
      />
      <input
        className="movie"
        placeholder="Rate"
        name="rate"
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add New Movie</button>
    </div>
  );
};

export default AddMovie;
