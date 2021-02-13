import { Test, TestingModule } from '@nestjs/testing';
import { SpaceShipRepository } from './space-ship-repository';

describe('SpaceShipRepository', () => {
  let provider: SpaceShipRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceShipRepository],
    }).compile();

    provider = module.get<SpaceShipRepository>(SpaceShipRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
