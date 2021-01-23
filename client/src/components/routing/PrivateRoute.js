import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
	const { isAuthenticated, loading } = auth;
	return (
		<Route
			{...rest}
			render={props =>
				!isAuthenticated && !loading ? (
					<Redirect to='/' />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	const { auth } = state;
	return { auth };
};

export default connect(mapStateToProps)(PrivateRoute);
