import { Injectable } from '@nestjs/common';
import { SpaceShip } from './space-ship';

@Injectable()
export class SpaceShipService {
    save(save: SpaceShip) {
        throw new Error("Method not implemented.");
    }
}
