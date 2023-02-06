import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  public _doorsQty: number;
  public _seatsQty: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty,
  }: ICar) {
    super({ model, color, year, status, buyValue, id });
    this._doorsQty = doorsQty;
    this._seatsQty = seatsQty;
  }

  private get doorsQty() : number {
    return this._doorsQty;
  }

  private set setDoorsQty(v : number) {
    this._doorsQty = v;
  }

  private get seatsQty() : number {
    return this._seatsQty;
  }

  private set setSeatsQty(v : number) {
    this._seatsQty = v;
  }

  public getCar = () => ({
    model: this.model,
    year: this.year,
    color: this.color,
    status: this.status,
    buyValue: this.buyValue,
    doorsQty: this.doorsQty,
    seatsQty: this.seatsQty,
    id: this.id,
  });
}

export default Car;