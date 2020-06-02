import express, { request, response, json } from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.use(express.json());

app.listen(3333);   