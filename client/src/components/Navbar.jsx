import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav-container bg-light">
            <Link className="brand" to="/">Climate Hack Columbia University</Link>
        </nav>
    );
};

export default Navbar;