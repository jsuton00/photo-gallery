import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
export const searchImages = async (searchTerm) => {
	return await axios.get(
		`https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`,
	);
};
