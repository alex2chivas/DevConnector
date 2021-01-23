import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import SignUpAndLoginField from '../formFields/SignUpAndLoginField';
import { setAlert, register } from '../../actions';
import PropTypes from 'prop-types';

const Register = ({ handleSubmit, setAlert, register, isAuthenticated }) => {
	const onRegisterSubmit = async values => {
		const { password, password2, name, email } = values;

		if (password !== password2) {
			setAlert('Password does not match', 'danger', 8000);
		} else {
			register({ name, email, password });
		}
	};

	// Redirect if succesful register in
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<div className='container'>
			<h1 className='large text-primary'>Sign Up</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Create Your Account
			</p>
			<form
				onSubmit={handleSubmit(onRegisterSubmit)}
				className='form'
				action='create-profile.html'
			>
				<div className='form-group'>
					<Field
						component={SignUpAndLoginField}
						type='text'
						placeholder='Name'
						name='name'
					/>
				</div>
				<div className='form-group'>
					<Field
						component={SignUpAndLoginField}
						type='email'
						placeholder='Email Address'
						name='email'
					/>
					<small className='form-text'>
						This site uses Gravatar so if you want a profile image, use a
						Gravatar email
					</small>
				</div>
				<div className='form-group'>
					<Field
						component={SignUpAndLoginField}
						type='password'
						placeholder='Password'
						name='password'
					/>
				</div>
				<div className='form-group'>
					<Field
						component={SignUpAndLoginField}
						type='password'
						placeholder='Confirm Password'
						name='password2'
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
			<p className='my-1'>
				Already have an account? <Link to='/login'>Sign In</Link>
			</p>
		</div>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => {
	const { isAuthenticated } = state.auth;
	return { isAuthenticated };
};

export default compose(
	reduxForm({
		form: 'RegisterForm',
		destroyOnUnmount: true,
	}),
	connect(mapStateToProps, { setAlert, register })
)(Register);
