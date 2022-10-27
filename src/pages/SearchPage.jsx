import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchImages } from '../apis/api';
import ErrorMessage from '../components/ErrorMessage';
import Header from '../components/Header';
import PhotoGrid from '../components/PhotoGrid';
import SearchTag from '../components/SearchTag';

const SearchPage = (props) => {
	const [images, setImages] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [searchTags, setSearchTags] = useState([]);

	const location = useLocation();

	console.log(location.search.substring(1));

	const searchForImages = async (searchTerm) => {
		try {
			setLoading(true);
			let response;

			if (searchTerm) {
				response = await searchImages(searchTerm);
			}

			setImages(response.data);
		} catch (err) {
			setIsError(true);
			console.log(err);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			let searchTerm = location.search.substring(1);

			if (searchTerm) {
				searchForImages(searchTerm);
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [location.search]);

	useEffect(() => {
		const timer = setTimeout(() => {
			let tags = [];

			if (images?.hits?.length > 0) {
				tags = [
					...images.hits.map((hits) => {
						return hits.tags.split(', ');
					}),
				].flat(1);

				tags = [...new Set(tags)];
			}

			setSearchTags(tags);
		}, 800);

		return () => {
			clearTimeout(timer);
		};
	}, [images.hits]);

	console.log(images);
	console.log(searchTags);
	return (
		<div className="search-page">
			<Header />
			<main className="search-page-main-content">
				<div className="search-tags-row row">
					{searchTags.length > 0 &&
						searchTags.map((searchTag) => {
							return <SearchTag key={searchTag} searchTagValue={searchTag} />;
						})}
				</div>
				{images && <PhotoGrid images={images.hits} />}
				{isError && <ErrorMessage />}
			</main>
		</div>
	);
};

export default SearchPage;
