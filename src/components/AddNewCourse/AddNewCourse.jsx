import React, { useState } from 'react';
import './AddNewCourse.css';

export default function AddNewCourse(props) {
	const switchShowCourses = props.switchShowCourses;
	const saveCourse = props.saveCourse;
	const show = props.show;
	const [newCourse, setNewCourse] = useState({
		title: 'new title',
		description: 'new description',
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb4096-812b-ebde22838167',
		],
		creationDate: '8/3/2021',
		duration: 100,
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551b1',
	});

	function onClickSave() {
		switchShowCourses(false);
		newCourse.creationDate = new Date();
		saveCourse(newCourse);
	}
	function onClickCancel() {
		switchShowCourses(false);
	}

	function onTitleChange(e) {
		setNewCourse({ ...newCourse, title: e.target.value });
	}

	function onDescriptionChange(e) {
		setNewCourse({ ...newCourse, description: e.target.value });
	}

	function onDurationChange(e) {
		setNewCourse({ ...newCourse, duration: e.target.value });
	}

	if (show) {
		return (
			<div>
				<h2>Add new</h2>
				<p>
					<label htmlFor='Title'>Title</label>
					<input
						id='Title'
						type='text'
						onChange={onTitleChange}
						value={newCourse.title}
					/>
				</p>
				<p>
					<label htmlFor='Description'>Description</label>
					<textarea
						id='Description'
						onChange={onDescriptionChange}
						value={newCourse.description}
					/>
				</p>
				<p>
					<label htmlFor='Author'>Author</label>
				</p>
				<p>
					<label htmlFor='Duration'>Duration</label>
					<input
						id='Duration'
						type='number'
						onChange={onDurationChange}
						value={newCourse.duration}
					/>
				</p>
				<button onClick={onClickSave}>Save</button>
				<button onClick={onClickCancel}>Cancel</button>
			</div>
		);
	}

	return '';
}
