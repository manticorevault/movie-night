import React from "react";

// Create the search box to update as the user inputs the text

const SearchMovie = (props) => {
    return (
        <div className="col col-sm-3">
            <input
                className="form-control"
                placeholder="Search movie"
                value={props.value}
                onChange={(event) => props.setMovieQuery(event.target.value)}
            />
        </div>
    )
}

export default SearchMovie;