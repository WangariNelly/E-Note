import { Request, Response, NextFunction } from 'express';

import { CatchAsyncErrorsHelper } from '../helpers/catchAsyncErrors.helper';
import { IRegisterRequest } from '../interfaces/register.interface';
import { responseHelper } from '../helpers/response.helper';

const registerUser = CatchAsyncErrorsHelper(
	async (req: Request, res: Response, next: NextFunction) => {
		const { firstName, lastName, email, password, confirmPassword } = <
			IRegisterRequest
		>req.body;
		I;

		return responseHelper(res, 200, true, 'Registration successful');
	},
);

export { registerUser };
