import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorService from '../Services/MotorService';

class MotorController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorService();
  }

  public async MotorCreate() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotor = await this.service.MotorCreate(motorcycle);
      
      return this.res.status(201).json(newMotor);
    } catch (error) {
      this.next(error);
    }
  }

  public async MotorcycleGetAll() {
    const motors = await this.service.MotorcycleGetAll();

    return this.res.status(200).json(motors);
  }

  public async MotorcycleGetById() {
    const { id } = this.req.params;

    const regex = /^[a-f\d]{24}$/i;

    if (!regex.test(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    
    const motor = await this.service.MotorcycleGetById(id);

    if (motor) return this.res.status(200).json(motor);
  
    return this.res.status(404).json({ message: 'Motorcycle not found' });
  }
}

export default MotorController;