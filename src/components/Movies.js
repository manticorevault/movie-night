import React from 'react'

// Search for movies using and "input" query as props, and then display the Movie Cards using the Poster argument
const Movies = (props) => {


    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <h5> {movie.Title} </h5>
                    <h5> {movie.Year} </h5>
                    <h5> {movie.imdbID} </h5>
                    <img src={movie.Poster} alt="movie poster"></img>
                </div>
            ))}
        </>
    )
}

export default Movies;