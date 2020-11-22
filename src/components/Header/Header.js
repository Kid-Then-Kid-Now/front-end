import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <h1>Time Capsule</h1>
            <nav>
                <Link to='/'>Home Page</Link> »
                <Link to='/submit'>Create your own memory!</Link> »
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;