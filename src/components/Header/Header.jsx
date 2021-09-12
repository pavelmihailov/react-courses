import React from 'react';
import Logo from '../Logo/Logo.jsx';
import './Header.css';
import './../../index.css';

export default function Header() {
	return (
		<div className='header'>
			<Logo />
			<div className='right user-name'>
				<button>Logout</button>
			</div>
			<div className='right'>User name</div>
		</div>
	);
}
