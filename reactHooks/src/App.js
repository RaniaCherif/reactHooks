import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import MovieList from "./components/MovieUtilities/MovieList";
import AddMovie from "./components/MovieUtilities/AddMovie";
import Filter from "./components/MovieUtilities/Filter";

function App() {
  const [keyWords, setKeyWords] = useState("");
  const [rating, setRating] = useState(1);
  const [movies, setMovies] = useState([
    {
      id: "01",
      title: "FURY",
      description:
        "Fury is a 2014 American war film written and directed by David Ayer, and starring Brad Pitt in the lead role, Shia LaBeouf, Logan Lerman, Michael Peña, Jon Bernthal, Jason Isaacs and Scott Eastwood.",
      rate: 5,
      img: "https://3238leblogdemarvelll-1278.kxcdn.com/wp-content/uploads/2014/10/fury-banniere-brad-pitt.jpg",
    },
    {
      id: "02",
      title: "AQUAMAN",
      description:
        "Aquaman est un film de super-héros américano-australien réalisé par James Wan, sorti en 2018.Il s'agit de la première aventure solo d'Aquaman, déjà apparu brièvement dans Batman v Superman L'Aube de la justice (2016).",
      rate: 4,
      img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/what-we-know-aquaman-2.jpg",
    },
    {
      id: "03",
      title: "JOHN WICK",
      description:
        "John Wick est un film d'action américain réalisé par Chad Stahelski (aidé par David Leitch bien que non crédité) et sorti en 2014.Il met en scène Keanu Reeves dans le rôle-titre, qui est un ancien tueur à gages contraint.",
      rate: 3,
      img: "https://global-img.gamergen.com/john-wick-parabellum-images_0900924716.jpg",
    },
  ]);
  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const searchMovie = (text) => {
    setKeyWords(text);
  };
  const rateMovie = (num) => {
    setRating(num);
  };
  return (
    <div className="App">
      <AddMovie addNewMovie={addNewMovie}></AddMovie>
      <Filter searchMovie={searchMovie} rateMovie={rateMovie}></Filter>
      <MovieList
        movies={movies.filter(
          (elm) =>
            elm.title.toLowerCase().includes(keyWords.toLowerCase().trim()) &&
            elm.rate >= rating
        )}
      ></MovieList>
    </div>
  );
}

export default App;
