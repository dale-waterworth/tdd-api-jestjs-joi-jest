import { Injectable } from '@nestjs/common';
import { SpaceShipEntity } from './space-ship-entity';

@Injectable()
export class SpaceShipRepository {
  save(spaceShipEntity: SpaceShipEntity): Promise<SpaceShipEntity> {
    return Promise.resolve({} as SpaceShipEntity);
  }
}
