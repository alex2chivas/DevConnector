import React from 'react';
import * as uuid from 'uuid';

export const fields = [
	{
		type: 'select',
		name: 'status',
		label: '',
		text: 'Give us an idea of where you are at in your career',
	},
	{
		type: 'text',
		name: 'company',
		label: 'Company',
		text: 'Could be your own company or one you work for',
	},
	{
		type: 'text',
		name: 'website',
		label: 'Website',
		text: 'Could be your own or a company website',
	},
	{
		type: 'text',
		name: 'location',
		label: 'Location',
		text: 'City & state suggested (eg. Boston, MA)',
	},
	{
		type: 'text',
		name: 'skills',
		label: '* Skills',
		text: 'Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)',
	},
	{
		type: 'text',
		name: 'githubusername',
		label: 'Github Username',
		text:
			'If you want your latest repos and a Github link, include your username',
	},
	{
		type: 'textarea',
		name: 'bio',
		label: 'A short bio of yourself',
		text: 'Tell us a little about yourself',
	},
];

const profileOptions = [
	{ value: '0', text: '*Select Professional Status' },
	{ value: 'Developer', text: 'Developer' },
	{ value: 'Junior Developer', text: 'Junior Developer' },
	{ value: 'Senior Developer', text: 'Senior Developer' },
	{ value: 'Manager', text: 'Manager' },
	{ value: 'Student or Learning', text: 'Student or Learning' },
	{ value: 'Instructor', text: 'Instructor' },
	{ value: 'Intern', text: 'Intern' },
	{ value: 'Other', text: 'Other' },
];

const options = () => {
	return profileOptions.map(option => {
		return (
			<option key={`${uuid.v4}_${option.text}`} value={option.value}>
				{option.text}
			</option>
		);
	});
};

const InputComponent = ({ type, input, text, label }) => {
	return (
		<div className='form-group'>
			<input type={type} placeholder={label} {...input} />
			<small className='form-text'>{text}</small>
		</div>
	);
};
const TextareaComponent = ({ type, input, text, label }) => {
	return (
		<div className='form-group'>
			<textarea type={type} placeholder={label} {...input} />
			<small className='form-text'>{text}</small>
		</div>
	);
};
const SelectComponent = ({ type, input, text, label }) => {
	return (
		<div className='form-group'>
			<select type={type} placeholder={label} {...input}>
				{options()}
			</select>
			<small className='form-text'>{text}</small>
		</div>
	);
};

export const checkComponent = type => {
	switch (type) {
		case 'select':
			return SelectComponent;
		case 'textarea':
			return TextareaComponent;
		default:
			return InputComponent;
	}
};
