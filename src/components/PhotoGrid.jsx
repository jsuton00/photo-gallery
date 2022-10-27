import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => {
	const { images } = props;
	return (
		<div className="photo-grid container">
			{images?.length > 0 &&
				images.map((image) => {
					return (
						<Photo
							key={image.id}
							imageUrl={image.largeImageURL}
							altText={image.tags}
						/>
					);
				})}
		</div>
	);
};

export default PhotoGrid;
