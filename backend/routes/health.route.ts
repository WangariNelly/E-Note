import express, { Router } from 'express';

const router: Router = express.Router();

import { getApiHealth } from '../controllers/health.controller';

router.get('/', getApiHealth);

export default router;
