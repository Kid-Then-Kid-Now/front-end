// // This file will list an image and title of all things submitted to the site. Essentially the content on the landing page.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './titles.css';
import Submit from '../Submit/Submit';
import APIURL from '../../config';
import axios from 'axios';

const GalleryTitles = ({ token }) => {
	const [gallery, setGallery] = useState([]);
	const nostalgia = `${APIURL}api/galleries`;
	useEffect(() => {
		fetch(nostalgia)
			.then((res) => res.json())
			.then((json) => {
				setGallery(json);
			})
			.catch((err) => {
				return 'There appears to be a file with Details.js. Is the API or JSON connected properly?';
			});
	}, []);

	return (
		<div className='holder'>
			{gallery.map((gallery) => {
				return (
					<Link to={`/${gallery._id}`} key={gallery._id}>
						<div className='card'>
							<img src={gallery.imgUrl} alt='{gallery.title}' />
							<div className='card-name'>{gallery.title}</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default GalleryTitles;
