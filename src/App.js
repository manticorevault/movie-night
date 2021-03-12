import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { CompareMovies } from "./components/CompareMovies";
// import { SingleMovie } from "./components/SingleMovie";
import { SearchMovies } from "./components/SearchMovies";
import './App.css';
// const FA = require('react-fontawesome')

function App() {
  return (
    <Router>
      <Header />

      <Switch>

        <Route exact path="/">
          <SearchMovies />
        </Route>

        <Route exact path="/compare">
          <CompareMovies />
        </Route>

      </Switch>
    </Router>
  )
}

export default App;
