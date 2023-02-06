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
}

export default MotorService;