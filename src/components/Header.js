import React from 'react'


// Define a header that can display the page where the user can search for movies (homepage) and the comparison page.
const Header = (props) => {

    return (
        <header>
            <div className="col header-box">
                <h1>{props.header}</h1>
            </div>
        </header>
    )
}

export default Header;
