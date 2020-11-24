import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ token }) => {
	return (
		<div className='header'>
			<h1>All The Feels</h1>
			<h2>A virtual time capsule</h2>
			<nav>
				<Link to='/'>Home Page</Link> »
				<Link to='/submit'>Create your own memory!</Link> »
				<Link to='/login'>Login</Link> »<Link to='/register'>Register</Link>
			</nav>
			{token && <h2>You are logged in!!</h2>}
		</div>
	);
};

export default Header;
