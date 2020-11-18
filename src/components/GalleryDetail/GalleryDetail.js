// // This file will display detailed information about each individual submission such as the genre and caption. Referencing how our other front end apps and assignments were done in class for file naming.

import React, { useState, useEffect } from 'react';
import './details.css';

const galleryInfo = `http://localhost:5000/galleries/`;

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
	}, [match.params.id]);

	return (
		<div className='info' key={detail.id}>
			<img src={detail.imgUrl} alt='' />
			<h2>Title: {detail.title}</h2>
			<p>Era/Time: {detail.eraTime}</p>
			<p>Caption: {detail.caption}</p>
			{/* <p>Submitted At: {detail.timestamps}</p>
            <p>Submitted By: {detail.user}</p> */}
		</div>
	);
};

export default GalleryDetail;
