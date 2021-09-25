import React, { useState } from 'react';
import Search from '../Search/Search';
import CreateCourse from '../CreateCourse/CreateCourse';
import './MainContent.css';
import Courses from '../Courses/Courses';
import AddNewCourse from '../AddNewCourse/AddNewCourse';

import { mockedCoursesList, mockedAuthorsList } from '../../mockdata';

export default function MainContent() {
	const [showAddNew, setShowAddNew] = useState(false);
	const [showCourses, setShowCourses] = useState(true);

	var coursesArray = mockedCoursesList;
	mockedCoursesList.forEach((course) => {
		const newA = course.authors.map((ca) => {
			return mockedAuthorsList.filter((a) => {
				return a.id === ca;
			})[0].name;
		});
		course.authorsString = newA.join(', ');
	});

	const [courses, setCourses] = useState(mockedCoursesList);

	function switchShowCourses(show) {
		setShowAddNew(show);
		setShowCourses(!show);
	}

	function saveCourse(newCourse) {
		coursesArray.push(newCourse);
		//todo generate newCourse id
		setCourses(coursesArray);
	}

	function onSearch(serchText) {
		console.log('searching for ...', serchText);
		var filtered = coursesArray.filter((c) => {
			return (
				c.title.search(new RegExp(serchText, 'i')) !== -1 ||
				c.description.search(new RegExp(serchText, 'i')) !== -1
			);
		});
		setCourses(filtered);
	}

	return (
		<div className='main-content'>
			<Search show={showCourses} onSearch={onSearch}></Search>
			<CreateCourse
				show={showCourses}
				switchShowCourses={switchShowCourses}
			></CreateCourse>
			<Courses show={showCourses} courses={courses}></Courses>
			<AddNewCourse
				show={showAddNew}
				switchShowCourses={switchShowCourses}
				saveCourse={saveCourse}
			></AddNewCourse>
		</div>
	);
}
