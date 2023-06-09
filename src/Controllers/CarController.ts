import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async CarCreate() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.CarCreate(car);

      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async CarGetAll() {
    const cars = await this.service.CarGetAll();

    return this.res.status(200).json(cars);
  }

  public async CarGetById() {
    const { id } = this.req.params;

    const regex = /^[a-f\d]{24}$/i;

    if (!regex.test(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    
    const car = await this.service.CarGetById(id);

    if (car) return this.res.status(200).json(car);
  
    return this.res.status(404).json({ message: 'Car not found' });
  }

  public async CarUpdate() {
    const { id } = this.req.params;

    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
  
    try {
      const regex = /^[a-f\d]{24}$/i;

      if (!regex.test(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

      const carId = await this.service.CarGetById(id);

      if (!carId) return this.res.status(404).json({ message: 'Car not found' });

      const newCar = await this.service.CarUpdate(car, id);

      return this.res.status(200).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;