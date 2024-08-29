import { check } from 'express-validator';

/**
 * Authentication request body for data validation
 */

const authValidations = {
	register: [
		check('email', 'Email is required!').notEmpty().trim(),
		check('email', 'Email is not valid!').isEmail().trim(),
		check('firstName', 'FirstName required!').notEmpty().trim(),
		check('firstName', 'FirstName must be a string!').isString().trim(),
		check('firstName', 'FirstName must have a minimum of 3 characters!')
			.isLength({ min: 3 })
			.trim(),
		check('lastName', 'lastName required!').notEmpty().trim(),
		check('lastName', 'lastName must be a string!').isString().trim(),
		check('lastName', 'lastName must have a minimum of 3 characters!')
			.isLength({ min: 3 })
			.trim(),

		check('password', 'Password is required').notEmpty(),
		check('password', 'Password must contain at least 6 characters').isLength({
			min: 6,
		}),
		check(
			'password',
			'Password must contain at least 1 digit,1 special character and 1 lowercase letter and 1 uppercase letter',
		).isStrongPassword({
			minUppercase: 1,
			minLowercase: 1,
			minNumbers: 1,
			minSymbols: 1,
		}),
		check('confirmPassword', 'Confirm Password is required').notEmpty(),
		check('confirmPassword', 'Confirm Password does not match password').custom(
			(value, { req }) => value === req.body.password,
		),
	],
};

export { authValidations };
