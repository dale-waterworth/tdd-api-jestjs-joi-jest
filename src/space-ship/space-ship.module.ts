import { Module } from '@nestjs/common';
import { SpaceShipController } from './space-ship.controller';
import { SpaceShipService } from './space-ship.service';
import { SpaceShipRepository } from './space-ship-repository';
import { SpaceShipConverter } from './space-ship-converter.service';
import { SpaceShipEntity } from './space-ship-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SpaceShipEntity])],
  controllers: [SpaceShipController],
  providers: [SpaceShipService, SpaceShipRepository, SpaceShipConverter],
})
export class SpaceShipModule {}
