import { Module } from '@nestjs/common';
import { SpaceShipController } from './space-ship.controller';
import { SpaceShipService } from './space-ship.service';

@Module({
  controllers: [SpaceShipController],
  providers: [SpaceShipService]
})
export class SpaceShipModule {}
