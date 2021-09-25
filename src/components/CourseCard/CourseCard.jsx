import React from 'react';
import './CourseCard.css';

export default function CourseCard(props) {
	const { title, description, authors, duration, creationDate, authorsString } =
		props;
	var d = new Date(creationDate);

	return (
		<div className='card'>
			<h2>{title}</h2>
			<div>{description}</div>
			<div>
				<label htmlFor=''>Authors: </label>
				{authorsString}
			</div>
			<div>
				<label htmlFor=''>Duration: </label>
				{duration} hour(s)
			</div>
			<div>
				<label htmlFor=''>Created: </label>
				{d.toDateString()}
			</div>
			<button>Show course</button>
		</div>
	);
}
