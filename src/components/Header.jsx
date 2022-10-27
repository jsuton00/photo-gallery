import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderPhoto from './HeaderPhoto';
import SearchBar from './SearchBar';

const Header = () => {
	let location = useLocation();
	return (
		<header className="header">
			<div
				className={`header-navbar-row ${
					location.pathname === '/'
						? 'header-navbar-row-primary'
						: 'header-navbar-row-secondary'
				} row`}
			>
				<div className="app-brand">
					<Link to="/" className="app-brand-link">
						<h1 className="app-brand-title">Photo gallery</h1>
					</Link>
				</div>
				{location.pathname === '/search' ? (
					<div className="header-search-bar">
						<SearchBar />
					</div>
				) : (
					<></>
				)}
			</div>
			<div className="header-search-container container">
				{location.pathname === '/' ? (
					<h1 className="header-search-title">
						Stunning free high-quality images
					</h1>
				) : (
					<></>
				)}
				{location.pathname === '/' ? <SearchBar /> : <></>}
			</div>
			{location.pathname === '/' ? <HeaderPhoto /> : <></>}
		</header>
	);
};

export default Header;
