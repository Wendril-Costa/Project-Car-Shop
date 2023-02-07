import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import MotorService from '../../../src/Services/MotorService';
import motorOutput from '../../../src/utils/MockMotor';

describe('Test para o Car Service', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('Deveria criar um motos no Banco', async function () {
    Sinon.stub(Model, 'create').resolves(motorOutput);

    const { id, ...motor } = motorOutput;

    const service = new MotorService();

    const result = await service.MotorCreate(motor);

    expect(result).to.be.deep.equal(motorOutput);
  });

  it('Deveria pegar todos as motocicletas ', async function () {
    Sinon.stub(Model, 'find').resolves([motorOutput]);
    
    const service = new MotorService();

    const result = await service.MotorcycleGetAll();

    expect(result).to.be.deep.equal([motorOutput]);
  });

  it('Deveria atualuzar um Carro no Banco', async function () {
    Sinon.stub(Model, 'findOneAndUpdate').resolves(motorOutput);

    const { id, ...motor } = motorOutput;

    const service = new MotorService();

    const result = await service.MotorcycleUpdate(motor, id as string);

    expect(result).to.be.deep.equal(motorOutput);
  });

  it('Retorna uma moto do MotorGetById', async function () {
    Sinon.stub(Model, 'findOne').resolves(motorOutput);

    const service = new MotorService();
    
    const result = await service.MotorcycleGetById('3634851dasdafa3f3123124123e12312');

    expect(result).to.be.deep.eq(motorOutput);
  });
});