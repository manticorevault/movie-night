import React from 'react'

// Search for movies using and "input" query as props, and then display the Movie Cards using the Poster argument
const Movies = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='movie-card d-flex justify-content-start m-3'>
                    <div>
                        <h1 className="movie-title"> {movie.Title} </h1>
                        <h1 className="movie-year"> {movie.Year} </h1>
                        <h5> {movie.imdbID} </h5>
                    </div>
                    <div>
                        <img className="movie-poster" src={movie.Poster} alt="movie poster"></img>
                    </div>

                    <div className="d-flex align-items-right justify-content-right selected" onClick={() => props.handleComparison(movie)}>
                        <compareMovies />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Movies;