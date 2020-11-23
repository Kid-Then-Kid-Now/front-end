import React, { useState } from 'react';
import './auth.css';
import Axios from 'axios';
import APIURL from '../../config';

const Register = () => {
	const signup = {
		email: '',
		password: '',
		password2: '',
		errors: {},
	};

	const [joinState, setJoinState] = useState(signup);
	const handleChange = (event) => {
		event.persist();
		setJoinState({ ...joinState, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setJoinState(signup);
		Axios({
			url: `${APIURL}api/users/signup`,
			method: 'POST',
			data: joinState,
		}).then((res) => {
			console.log(res);
		});
	};

	// const newUser = {
	// 	email: signup.email,
	// 	password: signup.password,
	// 	password2: signup.password2,
	// };

	return (
		<div className='auth-body'>
			<p>
				By signing up for an account, you'll be able to manage your submissions.
			</p>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='email'>Email: </label>
					<input
						type='email'
						id='email'
						value={joinState.email}
						onChange={handleChange}
						// value={signup.email}
						//   error={errors.email}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password: </label>
					<input
						onChange={handleChange}
						type='password'
						id='password'
						value={joinState.password}
						// onChange={handleSubmit}
						// value={signup.password}
						//   error={errors.password}
					/>
				</div>
				<div>
					<label htmlFor='password2'>Confirm Password: </label>
					<input
						onChange={handleChange}
						type='password'
						id='password2'
						value={joinState.password2}
						// onChange={handleSubmit}
						// value={signup.password2}
						//   error={errors.password2}
					/>
				</div>

				<button type='submit' className='pretty-button'>
					Sign up
				</button>
			</form>
		</div>
	);
};

export default Register;
