import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null { 
    if (car) {
      return new Car(car); 
    }
    return null;
  }

  public async CarCreate(car: ICar) { 
    const carODM = new CarODM();

    const newCar = await carODM.create(car); 

    return this.createCarDomain(newCar); 
  }

  public async CarGetAll() {
    const carODM = new CarODM();

    const cars = await carODM.getAll();

    const carsArray = cars.map((car: ICar) =>
      this.createCarDomain(car));

    return carsArray;
  }

  public async CarGetById(id: string) {
    const carODM = new CarODM();

    const cars = await carODM.getById(id);

    if (!cars) return null;

    const carsArray = this.createCarDomain(cars);

    return carsArray;
  }

  public async CarUpdate(car: ICar, id: string) {
    const carODM = new CarODM();

    const updatedCar = await carODM.update(id, car);
    
    return this.createCarDomain(updatedCar);
  }
}

export default CarService;