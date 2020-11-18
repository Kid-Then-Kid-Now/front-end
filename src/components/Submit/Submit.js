import React from 'react';

const Submit = () => {
	return (
		<div>
			<form>
				<label for='title'>Title:</label>
				<input title='title' id='title' value={null} placeholder='Title' />
				<label for='imgUrl'>Image URL:</label>
				<input
					title='imgUrl'
					id='imgUrl'
					value={null}
					placeholder='Image URL'
				/>
				<label for='caption'>Caption:</label>
				<input
					title='caption'
					id='caption'
					value={null}
					placeholder='Caption'
				/>
				<label for='eraTime'>Image URL:</label>
				<input
					title='eraTime'
					id='eraTime'
					value={null}
					placeholder='Era/Time'
				/>
			</form>
		</div>
	);
};

export default Submit;
