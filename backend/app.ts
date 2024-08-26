import express, { Express } from 'express';

const app: Express = express();


/**
 * mount middlewares
 * enable json body parser and url encoded routes
 */
app.use(express.json);
app.use(express.urlencoded({ extended: false}));

const baseUrl: string = 'api/v1';



export { app };