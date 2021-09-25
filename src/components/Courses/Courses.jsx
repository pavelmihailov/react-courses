import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './Courses.css';

export default function Courses(props) {
	let { show, courses } = props;
	if (show) {
		return (
			<div className='courses'>
				{courses.map((course) => {
					return <CourseCard {...course} key={course.id}></CourseCard>;
				})}
			</div>
		);
	}

	return '';
}
