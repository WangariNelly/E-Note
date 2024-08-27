/**
 * @summary class IERROR that extends inbuilt error class
 */
export class IError extends Error {
	statusCode: number;
	path: string;
	error: any;
}
