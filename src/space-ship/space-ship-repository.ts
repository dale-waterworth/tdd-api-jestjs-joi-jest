import { Injectable } from '@nestjs/common';
import { SpaceShipEntity } from './space-ship-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SpaceShipRepository {
  constructor(
    @InjectRepository(SpaceShipEntity)
    private readonly dbRepository: Repository<SpaceShipEntity>,
  ) {}

  save(spaceShipEntity: SpaceShipEntity): Promise<SpaceShipEntity> {
    return this.dbRepository.save(spaceShipEntity);
  }
}
