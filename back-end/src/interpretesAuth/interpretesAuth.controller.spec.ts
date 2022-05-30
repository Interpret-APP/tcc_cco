import { Test, TestingModule } from '@nestjs/testing';
import { InterpretesAuthController } from './interpretesAuth.controller';

describe('InterpretesAuthController', () => {
  let controller: InterpretesAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterpretesAuthController],
    }).compile();

    controller = module.get<InterpretesAuthController>(InterpretesAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
