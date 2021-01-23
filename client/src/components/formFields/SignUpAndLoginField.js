import React from 'react';

const SignUpAndLoginField = ({ input, placeholder, type }) => {
	return (
		<React.Fragment>
			<input {...input} placeholder={placeholder} type={type} />
		</React.Fragment>
	);
};

export default SignUpAndLoginField;
