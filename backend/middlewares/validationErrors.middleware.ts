import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../helpers/errorHandler.helper';

/**
 * Custom error handler middleware
 * @param req
 * @param _res
 * @param next
 *
 * @returns error or next middleware in request pipeline
 */
const validationErrorsMiddleware = (
	req: Request,
	_res: Response,
	next: NextFunction,
) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return next(new ErrorHandler(errors['errors'][0].msg, 400));
	}

	next();
};

export { validationErrorsMiddleware };
