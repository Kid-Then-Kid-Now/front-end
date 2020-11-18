import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Submit = (props) => {
	const [gallery, setGallery] = useState({
		title: '',
		imgUrl: '',
		caption: '',
		eraTime: '',
	});
	// const [redirect, setRedirect] = useState(false);
	const [newId, setNewId] = useState(null);

	const handleChange = (event) => {
		event.persist();
		setGallery({ ...gallery, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `http://localhost:5000/api/galleries/`;

		axios
			.post(url, gallery)
			.then((res) => {
				setNewId(res.data._id);
				console.log(res);
			})
			// .then((res) => setRedirect(true));
	};
	// axios
	// 	.post('/user', {
	// 		firstName: 'Fred',
	// 		lastName: 'Flintstone',
	// 	})
	// 	.then(function (response) {
	// 		console.log(response);
	// 	})
	// 	.catch(function (error) {
	// 		console.log(error);
	// 	});
	if (newId) {
		return <Redirect to={`/${newId}`} />;
	}
	return (
		<div>
			<form onSubmit={handleSubmit} className='submit-form'>
				<label htmlFor='title'>Title:</label>
				<input
					onChange={handleChange}
					name='title'
					id='title'
					value={gallery.title}
					placeholder='Title'
				/>
				<label htmlFor='imgUrl'>Image URL:</label>
				<input
					onChange={handleChange}
					name='imgUrl'
					id='imgUrl'
					value={gallery.imgUrl}
					placeholder='Image URL'
				/>
				<label htmlFor='caption'>Caption:</label>
				<input
					onChange={handleChange}
					name='caption'
					id='caption'
					value={gallery.caption}
					placeholder='Caption'
				/>
				<label htmlFor='eraTime'>Era/Time:</label>
				<input
					onChange={handleChange}
					name='eraTime'
					id='eraTime'
					value={gallery.eraTime}
					placeholder='Era/Time'
				/>
				<button id='button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Submit;
