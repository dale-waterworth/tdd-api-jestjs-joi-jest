import { Body, Controller, Post } from '@nestjs/common';
import { SpaceShipService } from './space-ship.service';
import { SpaceShipSaveRequestToSpaceShip } from './space-ship-save-request-to-space-ship.service';
import { SpaceShip } from './space-ship';

@Controller('space-ship')
export class SpaceShipController {
  constructor(private service: SpaceShipService) {}

  @Post()
  public save(
    @Body(new SpaceShipSaveRequestToSpaceShip()) spaceShip: SpaceShip,
  ): Promise<SpaceShip> {
    return this.service.save(spaceShip);
  }
}
