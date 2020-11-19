// // This file will display detailed information about each individual submission such as the genre and caption. Referencing how our other front end apps and assignments were done in class for file naming.

import React, { useState, useEffect } from 'react';
import './details.css';
import axios from "axios"
import { Redirect } from 'react-router-dom';

const galleryInfo = `http://localhost:5000/api/galleries/`;

const GalleryDetail = ({ match }) => {
	const [detail, setDetail] = useState('');
		const [gallery, setGallery] = useState({
			title: '',
			imgUrl: '',
			caption: '',
			eraTime: ''
		});
	useEffect(() => {
		const url = `${galleryInfo}${match.params.id}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setDetail(res);
			})
			.catch((err) => {
				console.log(
					'There appears to be a problem with GalleryDetail.js. Is the file properly receiving the back-end information and correct routes?'
				);
			});
	}, [match.params.id]);


// Delete a Submission
const handleDelete = (event) => {
	const url = `http://localhost:5000/api/galleries/${match.params.id}`;

	axios
	.delete(url)
		.then(res => {
			console.log(res)
		})
		.catch((err) => {
			console.log(err)
		})
	};

// // Update A submission
const [newId, setNewId] = useState(null);

const handleSubmit = (event) => {
	// event.preventDefault();
	// // Disabling default behavior made the detail page turn into a blank page upon updating a submission. If there's a better way to fix this have at it. 
	const url = `http://localhost:5000/api/galleries/${match.params.id}`;

	axios.put(url, gallery).then((res) => {
		setNewId(res.data._id);
		// console.log(res);
	});
};

	if (newId) {
		return <Redirect to={`/${newId}`} />;
	}

const handleChange = (event) => {
		event.persist();
		setGallery({ ...gallery, [event.target.name]: event.target.value });
}

// Display details on current submission
	return (
		<div className='info'>
			<img src={detail.imgUrl} alt='' />
			<h2>Title: {detail.title}</h2>
			<p>Era/Time: {detail.eraTime}</p>
			<p>Caption: {detail.caption}</p>
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
