import { Response, NextFunction } from 'express';

import { IError } from '../types/type';

const errorMiddleware = (
	err: IError,
	req: unknown,
	res: Response,
	_next: NextFunction,
) => {
	err.statusCode = err.statusCode || 500;
	if (process.env.NODE_ENV?.includes('development')) {
		// console.log('This message will only be logged in development mode.');
		res.status(err.statusCode).json({
			success: false,
			error: err,
			errMessage: err.message,
			stack: err.stack,
		});
	}

	if (process.env.NODE_ENV?.includes('production')) {
		// console.log('This message will only be logged in production mode.');
		let error: IError = { ...err };

		error.message = err.message;

		return res.status(err.statusCode).json({
			success: false,
			message: err.message || 'Internal Server Error',
		});
	}
};

export default errorMiddleware;
