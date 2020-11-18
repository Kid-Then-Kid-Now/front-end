import React, { useState } from 'react';

const Submit = () => {
	const [gallery, setGallery] = useState({
		title: '',
		imgUrl: '',
		caption: '',
		eraTime: '',
	});
	return (
		<div>
			<form>
				<label for='title'>Title:</label>
				<input
					onChange={handleChange}
					title='title'
					id='title'
					value={gallery.title}
					placeholder='Title'
				/>
				<label for='imgUrl'>Image URL:</label>
				<input
					onChange={handleChange}
					title='imgUrl'
					id='imgUrl'
					value={gallery.imgUrl}
					placeholder='Image URL'
				/>
				<label for='caption'>Caption:</label>
				<input
					onChange={handleChange}
					title='caption'
					id='caption'
					value={gallery.caption}
					placeholder='Caption'
				/>
				<label for='eraTime'>Image URL:</label>
				<input
					onChange={handleChange}
					title='eraTime'
					id='eraTime'
					value={gallery.eraTime}
					placeholder='Era/Time'
				/>
				<button id='button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Submit;
