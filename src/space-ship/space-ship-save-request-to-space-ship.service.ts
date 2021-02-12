import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { SpaceShip } from './space-ship';
import { SpaceShipId } from './SpaceShipId';
import Joi from 'joi';

export interface SaveSpaceShipRequest {
  'spaceShipId': string;
  'spaceShipName': string;
  'spaceShipNumber': number;
  'isFasterThanLight': boolean
}

@Injectable()
export class SpaceShipSaveRequestToSpaceShip implements PipeTransform<SaveSpaceShipRequest, SpaceShip> {

  transform(value: SaveSpaceShipRequest, metadata: ArgumentMetadata): SpaceShip {

    const schema = Joi.object({
      spaceShipId: Joi.string().min(12).max(12).required(),
      spaceShipName: Joi.string().max(20).required(),
      spaceShipNumber: Joi.number().required(),
      isFasterThanLight: Joi.boolean().required(),
    });

    const {error} = schema.validate(value);

    if(error){
      throw new BadRequestException('Validation failed');
    }

    const spaceShip: SpaceShip = {
      spaceShipId: SpaceShipId.from(value.spaceShipId),
      spaceShipName: value.spaceShipName,
      spaceShipNumber: value.spaceShipNumber,
      isFasterThanLight: value.isFasterThanLight,
    };

    return spaceShip;
  }
}
