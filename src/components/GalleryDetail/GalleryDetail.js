// // This file will display detailed information about each individual submission such as the genre and caption. Referencing how our other front end apps and assignments were done in class for file naming.

import React, { useState, useEffect } from 'react';
import './details.css';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import APIURL from '../../config';

const galleryInfo = `${APIURL}api/galleries/`;

const GalleryDetail = ({ match, token }) => {
	const history = useHistory();
	const [detail, setDetail] = useState('');
	const [gallery, setGallery] = useState('');
	useEffect(() => {
		const url = `${galleryInfo}${match.params.id}`;
		console.log(url);
		axios(url)
			.then((res) => {
				setDetail(res.data);
				setGallery(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [match.params.id]);

	// Delete a Submission
	const handleDelete = (event) => {
		const url = `${galleryInfo}${match.params.id}`;
		const headers = { Authorization: `Bearer ${token}` };
		axios({
			url: url,
			method: 'DELETE',
			headers: headers,
		})
			.then(() => {
				history.push('/');
			})
			.catch((err) => {
				console.error(err);
			});
	};

	// // Update A submission

	const handleSubmit = (event) => {
		event.preventDefault();
		// // Disabling default behavior made the detail page turn into a blank page upon updating a submission. If there's a better way to fix this have at it.
		const url = `${galleryInfo}${match.params.id}`;
		const headers = { Authorization: `Bearer ${token}` };
		axios({
			url: url,
			method: 'PUT',
			headers: headers,
			data: detail,
		}).then(() => {
			history.push('/');
		});
	};

	const handleChange = (event) => {
		event.persist();
		setDetail({ ...detail, [event.target.name]: event.target.value });
	};
	// Display details on current submission
	return (
		<div className='info'>
			<img src={gallery.imgUrl} alt='' />
			<div className='stuff'>
				<h2>Title: {gallery.title}</h2>
				<p>Era/Time: {gallery.eraTime}</p>
				<p>Caption: {gallery.caption}</p>
				{/* <p>Submitted At: {gallery.timestamps}</p> */}
			</div>

			{/* Form to update a submission  */}
			<form onSubmit={handleSubmit} className='update-form'>
				Do you need to update your submission?
				<br />
				<label htmlFor='title'>Title:</label>
				<input
					onChange={handleChange}
					name='title'
					id='title'
					value={detail.title}
					placeholder='Title'
				/>{' '}
				<br />
				<label htmlFor='imgUrl'>Image URL:</label>
				<input
					onChange={handleChange}
					type='url'
					name='imgUrl'
					id='imgUrl'
					value={detail.imgUrl}
					placeholder='Image URL'
				/>{' '}
				<br />
				<label htmlFor='caption'>Caption:</label>
				<input
					onChange={handleChange}
					name='caption'
					id='caption'
					value={detail.caption}
					placeholder='Caption'
				/>{' '}
				<br />
				<label htmlFor='eraTime'>Era/Time:</label>
				<input
					onChange={handleChange}
					name='eraTime'
					id='eraTime'
					value={detail.eraTime}
					placeholder='Era/Time'
				/>
				<br />
				<button className='pretty-button' type='submit'>
					Update Post
				</button>
			</form>

			<button className='pretty-button' onClick={handleDelete}>
				Delete Submission
			</button>
		</div>
	);
};

export default GalleryDetail;
