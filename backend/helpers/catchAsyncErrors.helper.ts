import { NextFunction, Request, Response } from 'express';

/**
 *A custom async resolver
 * @param handler
 * @constructor
 */
export const CatchAsyncErrorsHelper =
	(handler: any) => (req: Request, res: Response, next: NextFunction) =>
		Promise.resolve(handler(req, res, next)).catch(next);
