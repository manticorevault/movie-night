import React from 'react'
import { Link } from "react-router-dom";


// Define a header that can display the page where the user can search for movies (homepage) and the comparison page.
export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/"> Movie Night </Link>
                    </div>

                    <div className="nav-links">

                        <li>
                            <Link to="/" className="btn"> Home </Link>
                        </li>

                        <li>
                            <Link to="/compare" className="btn"> Compare Movies </Link>
                        </li>

                    </div>
                </div>
            </div>
        </header>
    )
}
