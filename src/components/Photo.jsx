import React from 'react';

const Photo = (props) => {
	const { imageUrl, altText } = props;
	return (
		<div className="photo-container">
			<img src={imageUrl} alt={altText} className="photo" />
		</div>
	);
};

export default Photo;
