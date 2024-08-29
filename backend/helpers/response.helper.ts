import { Response } from 'express';

/**
 * Custom response helper
 * @param res
 * @param statusCode
 * @param isSuccess
 * @param message
 * @param data
 *
 * @returns response object
 */
const responseHelper = (
	res: Response,
	statusCode: number,
	isSuccess: boolean,
	message: string,
	data?: Object,
) => {
	res.status(statusCode).json({
		success: isSuccess,
		message: message,
		data: data ?? {},
	});
};

export { responseHelper };
