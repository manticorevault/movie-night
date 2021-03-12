import React from 'react'

// Search for movies using and "input" query as props, and then display the Movie Cards using the Poster argument
const Movies = (props) => {


    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="d-flex justify-content-start m-2">
                    <img src={movie.Poster} alt="movie poster"></img>
                </div>
            ))}
        </>
    )
}

export default Movies;