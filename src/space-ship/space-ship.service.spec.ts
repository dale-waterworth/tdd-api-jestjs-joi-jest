import { Test, TestingModule } from '@nestjs/testing';
import { SpaceShipService } from './space-ship.service';
import { SpaceShip } from './space-ship';
import { SpaceShipId } from './SpaceShipId';
import { SpaceShipRepository } from './space-ship-repository';
import { SpaceShipEntity } from './space-ship-entity';
import { SpaceShipConverter } from './space-ship-converter.service';
import { UnprocessableEntityException } from '@nestjs/common';

jest.mock('./space-ship-repository');
jest.mock('./space-ship-converter.service');

describe('SpaceShipService', () => {
  let service: SpaceShipService;
  let repository: SpaceShipRepository;
  let converter: SpaceShipConverter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceShipService, SpaceShipRepository, SpaceShipConverter],
    }).compile();

    service = module.get<SpaceShipService>(SpaceShipService);
    repository = module.get<SpaceShipRepository>(SpaceShipRepository);
    converter = module.get<SpaceShipConverter>(SpaceShipConverter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call save', () => {
    const spaceShip: SpaceShip = {
      spaceShipId: SpaceShipId.from('abc-000-ship'),
    } as SpaceShip;
    const spaceShipEntity: SpaceShipEntity = {
      spaceShipId: 'abc-000-ship',
    } as SpaceShipEntity;
    const convertedSpaceShip: SpaceShip = {
      spaceShipId: SpaceShipId.from('abc-000-ship'),
    } as SpaceShip;
    converter.toEntity = jest.fn().mockReturnValue(spaceShipEntity);
    repository.save = jest.fn().mockResolvedValue(spaceShipEntity);
    converter.fromEntity = jest.fn().mockReturnValue(convertedSpaceShip);

    return service.save(spaceShip).then((returnedSpaceShip: SpaceShip) => {
      expect(converter.toEntity).toHaveBeenCalledWith(spaceShip);
      expect(repository.save).toHaveBeenCalledWith(spaceShipEntity);
      expect(converter.fromEntity).toHaveBeenCalledWith(spaceShipEntity);
      expect(returnedSpaceShip).toBe(convertedSpaceShip);
    });
  });

  it('should call save and throw and catch', () => {
    const spaceShip: SpaceShip = {
      spaceShipId: SpaceShipId.from('abc-000-ship'),
    } as SpaceShip;

    converter.toEntity = jest.fn().mockReturnValue({});
    repository.save = jest.fn().mockRejectedValue(undefined);
    converter.fromEntity = jest.fn();

    expect(service.save(spaceShip)).rejects.toThrow(
      UnprocessableEntityException,
    );
  });
});
