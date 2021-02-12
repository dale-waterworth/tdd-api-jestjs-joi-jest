import { Test, TestingModule } from '@nestjs/testing';
import { SpaceShipController } from './space-ship.controller';
import { SpaceShipService } from './space-ship.service';
import { SpaceShipId } from './SpaceShipId';
import { SpaceShip } from './space-ship';

jest.mock('./space-ship.service');

describe('SpaceShipController', () => {
  let controller: SpaceShipController;
  let service: SpaceShipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpaceShipController],
      providers: [SpaceShipService],
    }).compile();

    controller = module.get<SpaceShipController>(SpaceShipController);
    service = module.get<SpaceShipService>(SpaceShipService);
  });

  it('should call the service', () => {
    const spaceShip: SpaceShip = {
      'spaceShipId': SpaceShipId.from('abc-123-ship'),
      'spaceShipName': 'Star Harvester',
      'spaceShipNumber': 42,
      'isFasterThanLight': true,
    };

    controller.save(spaceShip);

    expect(service.save).toHaveBeenCalledWith(spaceShip);
  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

