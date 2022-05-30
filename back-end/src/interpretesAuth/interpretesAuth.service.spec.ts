import { Test, TestingModule } from '@nestjs/testing';
import { InterpretesAuthService } from './interpretesAuth.service';

describe('InterpretesAuthService', () => {
  let service: InterpretesAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterpretesAuthService],
    }).compile();

    service = module.get<InterpretesAuthService>(InterpretesAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
