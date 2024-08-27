import { IError } from '../types/type';

/**
 * Custom Error Handling class that extend IError custom Class
 */
export class ErrorHandler extends IError {
	public statusCode: number;
	constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
		Error.captureStackTrace(this, this.constructor);
	}
}
