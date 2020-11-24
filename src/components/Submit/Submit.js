import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './submit.css';
import APIURL from '../../config';

const Submit = (props) => {
	const history = useHistory();
	const [gallery, setGallery] = useState({
		title: '',
		imgUrl: '',
		caption: '',
		eraTime: '',
	});

	const handleChange = (event) => {
		event.persist();
		setGallery({ ...gallery, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}api/galleries`;
		const headers = { Authorization: `Bearer ${props.token}` };
		console.log(gallery);
		console.log(headers);
		props.setUser({ ...props.user, owner: props.user.id });
		setGallery({ ...gallery, owner: props.user.id });
		axios({
			url: url,
			method: 'POST',
			headers: headers,
			data: gallery,
		}).then((res) => {
			history.push('/');
		});
	};

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
				/>
				<br />
				<label htmlFor='imgUrl'>Image URL:</label>
				<input
					onChange={handleChange}
					type='url'
					name='imgUrl'
					id='imgUrl'
					value={gallery.imgUrl}
					placeholder='Image URL'
				/>
				<br />
				{/* <label htmlFor="upload">Or Upload Image:</label>
				<input 
					onChange={handleChange}
					type="file"
					name="upload"
					id="rrr"
					value={gallery.imgUrl} />
				<br /> An attempt at letting a user upload an image from their computer*/}
				<label htmlFor='caption'>Caption:</label>
				<input
					onChange={handleChange}
					name='caption'
					id='caption'
					value={gallery.caption}
					placeholder='Caption'
				/>
				<br />
				<label htmlFor='eraTime'>Era/Time:</label>
				<input
					onChange={handleChange}
					name='eraTime'
					id='eraTime'
					value={gallery.eraTime}
					placeholder='Era/Time'
				/>
				<br />
				<button id='button' type='submit' className='pretty-button'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Submit;
