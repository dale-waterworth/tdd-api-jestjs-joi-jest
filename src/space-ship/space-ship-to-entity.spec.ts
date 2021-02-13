import { Test, TestingModule } from '@nestjs/testing';
import { SpaceShipConverter } from './space-ship-converter.service';
import { SpaceShip } from './space-ship';
import { SpaceShipId } from './SpaceShipId';
import { SpaceShipEntity } from './space-ship-entity';

describe('SpaceShipToEntity', () => {
  let converter: SpaceShipConverter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceShipConverter],
    }).compile();

    converter = module.get<SpaceShipConverter>(SpaceShipConverter);
  });

  it('should be defined', () => {
    expect(converter).toBeDefined();
  });

  it('should be defined', () => {
    const spaceShip: SpaceShip = {
      isFasterThanLight: false,
      spaceShipId: SpaceShipId.from('abc-000-ship'),
      spaceShipName: 'the ship',
      spaceShipNumber: 0,
    };
    const spaceShipEntity: SpaceShipEntity = {
      isFasterThanLight: false,
      spaceShipId: 'abc-000-ship',
      spaceShipName: 'the ship',
      spaceShipNumber: 0,
    };

    const convertedEntity = converter.toEntity(spaceShip);

    expect(convertedEntity).toEqual(spaceShipEntity);
  });
});
