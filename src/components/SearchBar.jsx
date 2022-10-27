import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const SearchBar = () => {
	const [inputValue, setInputValue] = useState('');

	let navigate = useNavigate();

	const onChange = (e) => {
		return setInputValue(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();

		navigate({ pathname: '/search', search: inputValue });
	};

	return (
		<form onSubmit={onSubmit} name="search-form" className="search-form">
			<input
				type="text"
				className="search-input"
				onChange={onChange}
				placeholder="Search photos..."
				value={inputValue}
			/>
			<span className="search-icon">
				<FaSearch />
			</span>
		</form>
	);
};

export default SearchBar;
