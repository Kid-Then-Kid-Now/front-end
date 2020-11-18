// // This file will list an image and title of all things submitted to the site. Essentially the content on the landing page.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './gallerydetail.css';
import Submit from '../Submit/Submit'

const GalleryDetails = () => {
	const [gallery, setGallery] = useState([]);
	const nostalgia = 'http://localhost:5000/api/gallerytitles';

	useEffect(() => {
		fetch(nostalgia)
			.then((res) => res.json())
			.then((json) => {
				setGallery(json);
			})
			.catch((err) => {
				return 'There appears to be a file with Details.js. Is the API or JSON connected properly?';
			});
	});

	return (
		<div>
			{gallery.map((gallery) => {
				return (
					<Link to={`/${gallery.id}`}>
						<div className='card'>{gallery.title}</div>
					</Link>
				);
			})}
			<Submit/>
		</div>
	);
};

export default GalleryDetails;
