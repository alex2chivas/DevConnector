import React from 'react';

export const socialOptions = [
	{
		type: 'text',
		name: 'twitter',
		label: 'Twitter URL',
		clas: 'fab fa-twitter',
	},
	{
		type: 'text',
		name: 'facebook',
		label: 'Facebook URL',
		clas: 'fab fa-facebook',
	},
	{
		type: 'text',
		name: 'youtube',
		label: 'Youtube URL',
		clas: 'fab fa-youtube',
	},
	{
		type: 'text',
		name: 'linkedin',
		label: 'Linkedin URL',
		clas: 'fab fa-linkedin',
	},
	{
		type: 'text',
		name: 'instagram',
		label: 'Instagram URL',
		clas: 'fab fa-instagram',
	},
];

export const socialInput = ({ type, input, label, clas, name }) => {
	return (
		<div className='form-group social-input'>
			<i className={`${clas} fa-2x`}></i>
			<input type={type} placeholder={label} name={name} {...input} />
		</div>
	);
};
