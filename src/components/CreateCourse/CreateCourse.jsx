import React from 'react';
import './CreateCourse.css';

export default function CreateCourse(props) {
	const switchShowCourses = props.switchShowCourses;
	const show = props.show;

	function onClick() {
		switchShowCourses(true);
	}

	if (show) {
		return (
			<div className='create right'>
				<button onClick={onClick}>Add new course</button>
			</div>
		);
	}

	return '';
}
