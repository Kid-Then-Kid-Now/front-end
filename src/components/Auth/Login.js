import Axios from 'axios';
import React, { useState } from 'react';
import './auth.css';
import APIURL from '../../config';
import { Redirect } from 'react-router-dom';

const Login = ({ setToken }) => {
	const signin = {
		email: '',
		password: '',
	};
	const [redirect, setRedirect] = useState(false);
	const [formState, setFormState] = useState(signin);
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormState(signin);
		Axios({
			url: `${APIURL}api/users/signin`,
			method: 'POST',
			data: formState,
		}).then((res) => {
			console.log(res);
			setToken(res.data.token);
			setRedirect(true);
		});
	};
	if (redirect) {
		return <Redirect to='/' />;
	}

	return (
		<div className='auth-body'>
			<p>Login info here I guess</p>
			<form onSubmit={handleSubmit} className='login-form'>
				<label htmlFor='email'>Email Address: </label>
				<input
					required
					onChange={handleChange}
					type='email'
					name='email'
					id='email'
					placeholder='valid email address'
					value={formState.email}
				/>
				<br />
				<label htmlFor='password'>Password: </label>
				<input
					required
					onChange={handleChange}
					type='password'
					name='password'
					id='password'
					placeholder='enter password'
					value={formState.password}
				/>
				<br />

				<button id='button' type='submit' className='pretty-button'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Login;
