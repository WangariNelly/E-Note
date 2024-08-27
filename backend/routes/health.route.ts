import express, { Router } from 'express';

import { getApiHealth } from '../controllers/health.controller';

const router: Router = express.Router();

router.get('/', getApiHealth);

export default router;
