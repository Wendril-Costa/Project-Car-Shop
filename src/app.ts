import express from 'express';
import routes from './Router';

const app = express();

app.use(routes);

export default app;
