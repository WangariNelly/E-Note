import express, { Express } from 'express';
import router from './routes/health.route';
import errorMiddleware from './middlewares/error.middleware';

const app: Express = express();

/**
 * Mount middlewares
 * Enable json body payloads and URL encoded routes
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const baseUrl: string = '/api/v1';

// start mount routes
app.use(baseUrl + '/health', router);
//end mount routes

app.use(errorMiddleware);

export { app };
