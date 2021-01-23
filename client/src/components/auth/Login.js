import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import SignUpAndLoginField from '../formFields/SignUpAndLoginField';
import { login } from '../../actions';
import PropTypes from 'prop-types';

const Login = ({ login, handleSubmit, isAuthenticated }) => {
	const onLoginSubmit = async values => {
		const { email, password } = values;
		login(email, password);
	};

	// Redirect if logged in
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<div className='container'>
			<h1 className='large text-primary'>Login</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Login to your account
			</p>
			<form
				onSubmit={handleSubmit(onLoginSubmit)}
				className='form'
				action='create-profile.html'
			>
				<div className='form-group'>
					<Field
						component={SignUpAndLoginField}
						type='email'
						placeholder='Email Address'
						name='email'
					/>
					<small className='form-text'>
						This site uses Gravatar so if you want a profile image, use a
						Gravatar email when you register
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
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
			<p className='my-1'>
				Already have an account? <Link to='/resgister'>Sign Up</Link>
			</p>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => {
	const { isAuthenticated } = state.auth;
	return { isAuthenticated };
};

export default compose(
	reduxForm({
		form: 'LoginForm',
		destroyOnUnmount: true,
	}),
	connect(mapStateToProps, { login })
)(Login);
