// // This file will display detailed information about each individual submission such as the genre and caption. Referencing how our other front end apps and assignments were done in class for file naming.

import React, { useState, useEffect } from 'react';
import './details.css';
import axios from "axios"

const galleryInfo = `http://localhost:5000/api/galleries/`;

const GalleryDetail = ({ match }) => {
	const [detail, setDetail] = useState('');
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
	}, []);

// Update a Submission
	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `http://localhost:5000/api/galleries/${match.params.id}`;



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

// Display details on current submission
	return (
		<div className='info'>
			<img src={detail.imgUrl} alt='' />
			<h2>Title: {detail.title}</h2>
			<p>Era/Time: {detail.eraTime}</p>
			<p>Caption: {detail.caption}</p>
			{/* <p>Submitted At: {detail.timestamps}</p>
            <p>Submitted By: {detail.user}</p> */}
			<button onChange={update}>Update Post</button>
			<button onClick={handleDelete}>Delete Submission</button>

			<form update={handleSubmit} className='update-form'>
				<label htmlFor='title'>Title:</label>
				<input
					update={handleSubmit}
					name='title'
					id='title'
					value={detail.title}
					placeholder='Title'
				/>
				<label htmlFor='imgUrl'>Image URL:</label>
				<input
					update={handleSubmit}
					name='imgUrl'
					id='imgUrl'
					value={detail.imgUrl}
					placeholder='Image URL'
				/>
				<label htmlFor='caption'>Caption:</label>
				<input
					update={handleSubmit}
					name='caption'
					id='caption'
					value={detail.caption}
					placeholder='Caption'
				/>
				<label htmlFor='eraTime'>Era/Time:</label>
				<input
					onChange={handleSubmit}
					name='eraTime'
					id='eraTime'
					value={detail.eraTime}
					placeholder='Era/Time'
				/>
				<button id='button' type='submit'>
					Submit
				</button>
			</form>
			;
		</div>
	);
};

export default GalleryDetail;
