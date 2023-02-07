import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorController from '../Controllers/MotorController';

const routes = Router();

routes
  .get('/', (req, res) => res.send('Funcionando'));

routes
  .post('/cars', (req, res, next) => new CarController(req, res, next)
    .CarCreate());

routes
  .get('/cars', (req, res, next) => new CarController(req, res, next)
    .CarGetAll());

routes
  .get('/cars/:id', (req, res, next) => new CarController(req, res, next)
    .CarGetById());

routes
  .put('/cars/:id', (req, res, next) => new CarController(req, res, next)
    .CarUpdate());
      
routes
  .get('/motorcycles', (req, res, next) => new MotorController(req, res, next)
    .MotorcycleGetAll());

routes
  .get('/motorcycles/:id', (req, res, next) => new MotorController(req, res, next)
    .MotorcycleGetById());

routes
  .post('/motorcycles', (req, res, next) => new MotorController(req, res, next)
    .MotorCreate());

routes
  .put('/motorcycles/:id', (req, res, next) => new MotorController(req, res, next)
    .MotorcycleUpdate());

export default routes;