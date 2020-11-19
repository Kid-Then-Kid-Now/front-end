// // This file will display detailed information about each individual submission such as the genre and caption. Referencing how our other front end apps and assignments were done in class for file naming.

import React, { useState, useEffect } from 'react';
import './details.css';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';

const galleryInfo = `https://all-the-feels-back-end.herokuapp.com/api/galleries/`;

const GalleryDetail = ({ match }) => {
	const history = useHistory();
	const [detail, setDetail] = useState('');
	const [gallery, setGallery] = useState('');
	useEffect(() => {
		const url = `${galleryInfo}${match.params.id}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setDetail(res);
				setGallery(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [match.params.id]);

	// Delete a Submission
	const handleDelete = (event) => {
		const url = `${galleryInfo}${match.params.id}`;

		axios
			.delete(url)
			.then((res) => {
				console.log(res);
				history.push('/');
			})
			.catch((err) => {
				console.error(err);
			});
	};

	// // Update A submission
	const [newId, setNewId] = useState(null);

	const handleSubmit = (event) => {
		// event.preventDefault();
		// // Disabling default behavior made the detail page turn into a blank page upon updating a submission. If there's a better way to fix this have at it.
		const url = `${galleryInfo}${match.params.id}`;

		axios.put(url, detail).then((res) => {
			setNewId(res.data._id);
		});
	};

	if (newId) {
		return <Redirect to={`/${newId}`} />;
	}

	const handleChange = (event) => {
		event.persist();
		setDetail({ ...detail, [event.target.name]: event.target.value });
	};
	console.log(detail);
	// Display details on current submission
	return (
		<div className='info'>
			<img src={gallery.imgUrl} alt='' />
			<h2>Title: {gallery.title}</h2>
			<p>Era/Time: {gallery.eraTime}</p>
			<p>Caption: {gallery.caption}</p>
			{/* <p>Submitted At: {detail.timestamps}</p>
            <p>Submitted By: {detail.user}</p> */}

			<button className='pretty-button' onClick={handleDelete}>
				Delete Submission
			</button>

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
				<button className='pretty-button' onSubmit={handleSubmit} type='submit'>
					Update Post
				</button>
			</form>
		</div>
	);
};

export default GalleryDetail;
