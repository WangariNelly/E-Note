import express from 'express';

import { registerUser } from '../controllers/auth.controller';
import { authValidations } from '../validations/auth.validations';
import { validationErrorsMiddleware } from '../middlewares/validationErrors.middleware';


const auth = express.Router();


auth.post(
	'/register',
	authValidations.register,
	validationErrorsMiddleware,
	registerUser,
);

export default auth;
