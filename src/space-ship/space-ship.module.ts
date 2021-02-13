import { Module } from '@nestjs/common';
import { SpaceShipController } from './space-ship.controller';
import { SpaceShipService } from './space-ship.service';
import { SpaceShipRepository } from './space-ship-repository';
import { SpaceShipConverter } from './space-ship-converter.service';

@Module({
  controllers: [SpaceShipController],
  providers: [SpaceShipService, SpaceShipRepository, SpaceShipConverter],
})
export class SpaceShipModule {}
