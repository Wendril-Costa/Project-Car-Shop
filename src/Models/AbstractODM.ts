import { Model, Schema, models, model, UpdateQuery } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async getById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async update(id: string, update: T): Promise<T | null> {
    return this.model.findOneAndUpdate(
      { id }, 
      { ...update as UpdateQuery<T> },
      { new: true },
    );
  }
}

export default AbstractODM;