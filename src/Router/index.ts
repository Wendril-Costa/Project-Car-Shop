import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.get('/', (req, res) => res.send('Funcionando'));

routes.post('/cars', (req, res, next) => new CarController(req, res, next).CarCreate());

export default routes;