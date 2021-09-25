import React, { useState } from 'react';
import './Search.css';

export default function Search(props) {
	const [searchText, setSearchText] = useState('');
	const show = props.show;
	const onSearch = props.onSearch;
	function onClick() {
		if (onSearch) onSearch(searchText);
	}
	function onChange(e) {
		setSearchText(e.target.value);
	}
	function onClickAll() {
		setSearchText('');
		onSearch();
	}

	if (show) {
		return (
			<div className='search'>
				<input type='text' value={searchText} onChange={onChange} />
				<button onClick={onClick}>Search</button>
				<button onClick={onClickAll}>Show all</button>
			</div>
		);
	}

	return '';
}
