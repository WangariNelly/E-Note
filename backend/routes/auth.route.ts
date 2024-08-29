import express from 'express';

import { registerUser } from '../controllers/auth.controller';

const auth = express.Router();

auth.post('/register', registerUser);

export default auth;
