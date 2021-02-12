import { Test, TestingModule } from '@nestjs/testing';
import { SpaceShipService } from './space-ship.service';

describe('SpaceShipService', () => {
  let service: SpaceShipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceShipService],
    }).compile();

    service = module.get<SpaceShipService>(SpaceShipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
