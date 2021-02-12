import { SaveSpaceShipRequest, SpaceShipSaveRequestToSpaceShip } from './space-ship-save-request-to-space-ship.service';
import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { SpaceShip } from './space-ship';
import { SpaceShipId } from './SpaceShipId';

describe('SpaceShipRequestValidatorPipe', () => {
  let transformer: SpaceShipSaveRequestToSpaceShip;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceShipSaveRequestToSpaceShip],
    }).compile();

    transformer = module.get<SpaceShipSaveRequestToSpaceShip>(SpaceShipSaveRequestToSpaceShip);
  });

  it('should be defined', () => {
    expect(transformer).toBeDefined();
  });

  it('should throw error if no body', () => {
    // @ts-ignore
    const response = () => transformer.transform({}, {});
    expect(response).toThrow(BadRequestException);
  });

  it('should convert to valid Space Ship', () => {
    const spaceShipRequest: SaveSpaceShipRequest = {
      'spaceShipId': 'abc-123-ship',
      'spaceShipName': 'Star Harvester',
      'spaceShipNumber': 42,
      'isFasterThanLight': true,
    };
    const spaceShip: SpaceShip = {
      'spaceShipId': SpaceShipId.from(spaceShipRequest.spaceShipId),
      'spaceShipName': 'Star Harvester',
      'spaceShipNumber': 42,
      'isFasterThanLight': true,
    };

    // @ts-ignore
    const parsedSpaceShip = transformer.transform(spaceShipRequest, {});

    expect(parsedSpaceShip).toEqual(spaceShip);
  });
});
