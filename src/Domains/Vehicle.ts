import IVehicle from '../Interfaces/IVehicle';

abstract class Vehicle {
  public _id?: string | undefined;
  public _model: string;
  public _year: number;
  public _color: string;
  public _status: boolean;
  public _buyValue: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
  }: IVehicle) {
    this._id = id;
    this._model = model;
    this._year = year;
    this._color = color;
    this._status = status || false;
    this._buyValue = buyValue;
  }

  protected get model() : string {
    return this._model;
  }

  protected get year() : number {
    return this._year;
  }

  protected get color() : string {
    return this._color;
  }

  protected get status() : boolean {
    return this._status;
  }

  protected get buyValue() : number {
    return this._buyValue;
  }

  protected get id() : string | undefined {
    return this._id;
  }
}

export default Vehicle;