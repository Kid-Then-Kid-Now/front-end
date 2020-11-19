import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './submit.css';

const Submit = (props) => {
	const [gallery, setGallery] = useState({
		title: '',
		imgUrl: '',
		caption: '',
		eraTime: '',
	});
	const [newId, setNewId] = useState(null);

	const handleChange = (event) => {
		event.persist();
		setGallery({ ...gallery, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `https://all-the-feels-back-end.herokuapp.com/api/galleries/`;

		axios.post(url, gallery).then((res) => {
			setNewId(res.data._id);
		});
	};

	if (newId) {
		return <Redirect to={`/${newId}`} />;
	}
	return (
		<div>
			<p>
				If you have something that was nostalgic to you when you were young(er),
				feel free to add it below! Let's keep it kid friendly, please.
			</p>
			<form onSubmit={handleSubmit} className='submit-form'>
				<label htmlFor='title'>Title:</label>
				<input
					onChange={handleChange}
					name='title'
					id='title'
					value={gallery.title}
					placeholder='Title'
				/>{' '}
				<br />
				<label htmlFor='imgUrl'>Image URL:</label>
				<input
					onChange={handleChange}
					name='imgUrl'
					id='imgUrl'
					value={gallery.imgUrl}
					placeholder='Image URL'
				/>{' '}
				<br />
				<label htmlFor='caption'>Caption:</label>
				<input
					onChange={handleChange}
					name='caption'
					id='caption'
					value={gallery.caption}
					placeholder='Caption'
				/>{' '}
				<br />
				<label htmlFor='eraTime'>Era/Time:</label>
				<input
					onChange={handleChange}
					name='eraTime'
					id='eraTime'
					value={gallery.eraTime}
					placeholder='Era/Time'
				/>{' '}
				<br />
				<button id='button' type='submit' className='pretty-button'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Submit;
