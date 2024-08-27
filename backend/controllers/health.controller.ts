import express, { Request, Response, NextFunction } from 'express';

export const getApiHealth = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (!req.errored) {
		return res.status(200).json({
			success: true,
			message: 'Api health ok!',
			data: {},
		});
		return res.status(500).json({ message: 'Error occured!' });
	}
};
