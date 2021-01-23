const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require('config');
const User = require('../../models/User');

//@route   POST api/users
// @desc   Register User
// @access Public
router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please include in the password at least 6 or more characters'
		).isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			//  See if user exists
			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'User already exists' }] });
			}

			// Get users gravatar
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm',
			});

			// Make instance of new User model
			user = new User({
				name,
				email,
				avatar,
				password,
			});

			// Encrypt pwassword
			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			// Return jsonwebtoken

			const payload = {
				user: {
					id: user._id,
				},
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{
					// DO
					// Change to 3600 which is 1 hour
					expiresIn: 360000,
				},
				(error, token) => {
					if (error) throw error;
					res.json({ token });
				}
			);
		} catch (error) {
			console.log(error.message);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;

// make request on post man
// key: Content-type and value: application/json
