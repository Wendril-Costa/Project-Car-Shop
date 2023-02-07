import Motor from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorService {
  private createMotorDomain(motor: IMotorcycle | null): Motor | null { 
    if (motor) {
      return new Motor(motor); 
    }
    return null;
  }

  public async MotorCreate(motor: IMotorcycle) { 
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motor); 
    return this.createMotorDomain(newMotorcycle); 
  }

  public async MotorcycleGetAll() {
    const motorcycleODM = new MotorcycleODM();

    const motors = await motorcycleODM.getAll();

    const carsArray = motors.map((car: IMotorcycle) =>
      this.createMotorDomain(car));

    return carsArray;
  }

  public async MotorcycleGetById(id: string) {
    const motorcycleODM = new MotorcycleODM();

    const motors = await motorcycleODM.getById(id);

    if (!motors) return null;

    const motorsArray = this.createMotorDomain(motors);

    return motorsArray;
  }
}

export default MotorService;