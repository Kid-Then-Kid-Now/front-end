import React, { useState } from 'react';
import './auth.css';
import Axios from 'axios';
import APIURL from '../../config';
import { Redirect } from 'react-router-dom';

const Register = () => {
	const signup = {
		email: '',
		password: '',
		password2: '',
		errors: {},
	};
	const [passwordError, setPasswordError] = useState(false);
	const [redirect, setRedirect] = useState(false);
	const [joinState, setJoinState] = useState(signup);
	const handleChange = (event) => {
		event.persist();
		setJoinState({ ...joinState, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setJoinState(signup);
		if (joinState.password === joinState.password2) {
			Axios({
				url: `${APIURL}api/users/signup`,
				method: 'POST',
				data: joinState,
			}).then((res) => {
				console.log(res);
				setRedirect(true);
			});
		} else {
			setPasswordError(true);
		}
	};

	if (redirect) {
		return <Redirect to='/login' />;
	}

	return (
		<div>
			<p className='sign-up'>
				By signing up for an account, you'll be able to manage your submissions.
			</p>
			<form onSubmit={handleSubmit} className='auth-body'>
				<div className='form-component'>
					<label htmlFor='email'>Email: </label>
					<input
						required
						type='email'
						id='email'
						value={joinState.email}
						onChange={handleChange}
					/>
				</div>
				<div className='form-component'>
					<label htmlFor='password'>Password: </label>
					<input
						required
						onChange={handleChange}
						type='password'
						id='password'
						value={joinState.password}
					/>
				</div>
				<div className='form-component'>
					<label htmlFor='password2'>Confirm Password: </label>
					<input
						required
						onChange={handleChange}
						type='password'
						id='password2'
						value={joinState.password2}
					/>
				</div>
				{passwordError && <h2>Passwords must match!</h2>}
				<button type='submit' className='pretty-button'>
					Sign up
				</button>
			</form>
		</div>
	);
};

export default Register;
