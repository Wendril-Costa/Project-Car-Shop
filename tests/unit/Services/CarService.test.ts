import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import carOutput from '../../../src/utils/MockCar';

describe('Test para o Car Service', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('Deveria pegar todos os carros ', async function () {
    Sinon.stub(Model, 'find').resolves([carOutput]);
    
    const service = new CarService();

    const result = await service.CarGetAll();

    expect(result).to.be.deep.equal([carOutput]);
  });

  it('Deveria criar um Carro no Banco', async function () {
    Sinon.stub(Model, 'create').resolves(carOutput);

    const { id, ...car } = carOutput;

    const service = new CarService();

    const result = await service.CarCreate(car);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria atualuzar um Carro no Banco', async function () {
    Sinon.stub(Model, 'findOneAndUpdate').resolves(carOutput);

    const { id, ...car } = carOutput;

    const service = new CarService();

    const result = await service.CarUpdate(car, id as string);

    expect(result).to.be.deep.equal(carOutput);
  });
});