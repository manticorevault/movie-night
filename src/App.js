import React, { useState, useEffect } from "react";
import Movies from "./components/Movies"
import Header from "./components/Header";
import SearchMovie from "./components/SearchMovie";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


const App = () => {

  // Create the loading state 
  const [movies, setMovies] = useState([]);
  const [movieQuery, setMovieQuery] = useState("")

  // Create a state for the comparison list
  //const []

  // Make a get request to the API and fetch movies based on the search query.
  const fetchMovies = async (movieQuery) => {
    const movieUrl = `http://www.omdbapi.com/?s=${movieQuery}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`

    // Use fetch to retrieve information from the OMDB API and return it as json
    const res = await fetch(movieUrl);
    const resJson = await res.json();

    // Only use the Search parameter from the API if the it exists.
    if (resJson.Search) {
      setMovies(resJson.Search);
    }
  }

  // useEffect to be called as the app loads with the movieQuery set to "".
  useEffect(() => {
    fetchMovies(movieQuery);
  }, [movieQuery])

  return (
    <div className="container-fluid carrousel">

      <div className="row d-flex align-items-center mt-3 mb-5">
        <Header className="header" header="Movie Night" />
        <SearchMovie movieQuery={movieQuery} setMovieQuery={setMovieQuery} />
      </div>

      <div className="row">
        <Movies movies={movies} />
      </div>
    </div>
  )
}

export default App;
