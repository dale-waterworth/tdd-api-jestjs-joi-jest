import { Injectable } from '@nestjs/common';
import { SpaceShip } from './space-ship';
import { SpaceShipEntity } from './space-ship-entity';
import { SpaceShipId } from './SpaceShipId';

@Injectable()
export class SpaceShipConverter {
  toEntity(spaceShip: SpaceShip): SpaceShipEntity {
    return {
      isFasterThanLight: spaceShip.isFasterThanLight,
      spaceShipId: spaceShip.spaceShipId.value(),
      spaceShipName: spaceShip.spaceShipName,
      spaceShipNumber: spaceShip.spaceShipNumber,
    };
  }

  fromEntity(spaceShipEntity: SpaceShipEntity): SpaceShip {
    return {
      isFasterThanLight: spaceShipEntity.isFasterThanLight,
      spaceShipId: SpaceShipId.from(spaceShipEntity.spaceShipId),
      spaceShipName: spaceShipEntity.spaceShipName,
      spaceShipNumber: spaceShipEntity.spaceShipNumber,
    };
  }
}
