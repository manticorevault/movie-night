import React, { useState, useEffect } from "react";
import Movies from "./components/Movies"
import Header from "./components/Header";
import CompareMovies from "./components/CompareMovies";
import DeleteComparison from "./components/DeleteComparison";
import SearchMovie from "./components/SearchMovie";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


const App = () => {

  // Create the loading state 
  const [movies, setMovies] = useState([]);
  const [movieQuery, setMovieQuery] = useState("")

  // Create a state for the comparison list
  const [compare, setCompare] = useState([]);

  // Make a get request to the API and fetch movies based on the search query.
  const fetchMovies = async (movieQuery) => {
    const movieUrl = `http://www.omdbapi.com/?s=${movieQuery}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
    // const singleMovieUrl = `http://www.omdbapi.com/?s=${movieQuery.imdbID}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`

    // Use fetch to retrieve information from the OMDB API and return it as json
    const res = await fetch(movieUrl);
    const resJson = await res.json();

    // Only use the Search parameter from the API if the query exists.
    if (resJson.Search) {
      setMovies(resJson.Search);
    }
  }

  // useEffect to be called as the app loads with the movieQuery set to "".
  useEffect(() => {
    fetchMovies(movieQuery);
  }, [movieQuery])

  // useEffect to persist movies on load by setting the comparison state to the rememberSelection function.
  useEffect(() => {
    const persistedMovies = JSON.parse(localStorage.getItem("movies-to-persist"))

    if (persistedMovies) {
      setCompare(persistedMovies)
    }
  }, []);

  const selectedMovie = (movie) => {
    const moviesToCompare = [...compare, movie]
    setCompare(moviesToCompare);

    // Persist movies to the localStorage using rememberSelection()
    rememberSelection(moviesToCompare);
  }

  // Filter out movies from the Compared List
  const removeSelection = (movie) => {
    const moviesToCompare = compare.filter(
      (comparedMovie) => comparedMovie.imdbID !== movie.imdbID
    )

    setCompare(moviesToCompare);
  }

  // Use localStorage to persist items on the browser even if the user reloads.
  const rememberSelection = (items) => {
    localStorage.setItem("movies-to-persist", JSON.stringify(items))
  }

  return (
    <div className="container-fluid carrousel">

      <div className="row d-flex align-items-center mt-3 mb-5">
        <Header className="header" header="Movie Night" />
        <SearchMovie movieQuery={movieQuery} setMovieQuery={setMovieQuery} />
      </div>

      <div className="row display-card">
        <Movies movies={movies} CompareMovies={CompareMovies} handleComparison={selectedMovie} />
      </div>

      <div className="row d-flex align-items-center mt-3 mb-5">
        <Header className="header" header="Compare Movies" />
      </div>

      <div className="row">
        <Movies movies={compare} CompareMovies={DeleteComparison} handleComparison={removeSelection} />
      </div>
    </div>


  )
}

export default App;
