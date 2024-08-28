import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

import router from './routes/health.route';
import errorMiddleware from './middlewares/error.middleware';
import swaggerDefinition from './swagger.json';

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

//mount swagger
app.use(
	baseUrl + '/swagger',
	swaggerUi.serve,
	swaggerUi.setup(swaggerDefinition),
);
//end mount routes

app.use(errorMiddleware);

export { app };
