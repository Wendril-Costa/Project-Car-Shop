import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorController from '../Controllers/MotorController';

const routes = Router();

routes.get('/', (req, res) => res.send('Funcionando'));

routes.post('/cars', (req, res, next) => new CarController(req, res, next).CarCreate());
routes.post('/motorcycles', (req, res, next) => new MotorController(req, res, next).MotorCreate());

export default routes;