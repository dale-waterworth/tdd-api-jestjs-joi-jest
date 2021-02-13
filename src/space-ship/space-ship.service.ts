import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { SpaceShip } from './space-ship';
import { SpaceShipRepository } from './space-ship-repository';
import { SpaceShipConverter } from './space-ship-converter.service';
import { SpaceShipEntity } from './space-ship-entity';

@Injectable()
export class SpaceShipService {
  constructor(
    private repository: SpaceShipRepository,
    private converter: SpaceShipConverter,
  ) {}

  save(spaceShip: SpaceShip): Promise<SpaceShip> {
    const spaceShipEntity = this.converter.toEntity(spaceShip);
    return this.repository
      .save(spaceShipEntity)
      .then((spaceShipEntity: SpaceShipEntity) => {
        return this.converter.fromEntity(spaceShipEntity);
      })
      .catch(() => {
        throw new UnprocessableEntityException('Could not save');
      });
  }
}
