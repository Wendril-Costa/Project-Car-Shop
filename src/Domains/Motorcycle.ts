import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    super({
      id: moto.id,
      model: moto.model,
      year: moto.year,
      color: moto.color,
      status: moto.status || false,
      buyValue: moto.buyValue,
    });
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }
}

export default Motorcycle;