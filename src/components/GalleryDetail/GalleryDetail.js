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

{/* <form update={handleSubmit} className="update-form">

</form> */}

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


	return (
		<div className='info'>
			<img src={detail.imgUrl} alt='' />
			<h2>Title: {detail.title}</h2>
			<p>Era/Time: {detail.eraTime}</p>
			<p>Caption: {detail.caption}</p>
			{/* <p>Submitted At: {detail.timestamps}</p>
            <p>Submitted By: {detail.user}</p> */}
			
			{/* <button onChange={update}>Update Post</button> */}
			<button onClick={handleDelete}>Delete Submission</button>
		</div>
	);
};

export default GalleryDetail;
