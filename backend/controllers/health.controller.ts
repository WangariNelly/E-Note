import express, { Request, Response, NextFunction } from 'express';

import { CatchAsyncErrorsHelper } from '../helpers/catchAsyncErrors.helper';
import { ErrorHandler } from '../helpers/errorHandler.helper';

export const getApiHealth = CatchAsyncErrorsHelper(
	async (req: Request, res: Response, next: NextFunction) => {
		// console.log("connected to controller")
		if (!req.errored) {
			const customError = next(new ErrorHandler('Health API down', 503));
			console.log(customError);
			return customError;
		}
		return res.status(200).json({
			success: true,
			message: 'Api health ok!',
			data: {},
		});
	},
);
