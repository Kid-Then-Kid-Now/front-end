import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Time Capsule</h1>
            <nav>
                <Link to='/'>Home Page</Link>
            </nav>
        </div>
    );
};

export default Header;