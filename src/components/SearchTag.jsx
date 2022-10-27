import React from 'react';
import { useNavigate } from 'react-router';

const SearchTag = (props) => {
	const { searchTagValue } = props;
	let navigate = useNavigate();

	const onClick = (e) => {
		e.preventDefault();

		navigate({ path: '/search', search: searchTagValue });
	};

	return (
		<button
			type="button"
			onClick={onClick}
			className="search-tag-button"
			value={searchTagValue}
		>
			{searchTagValue}
		</button>
	);
};

export default SearchTag;
