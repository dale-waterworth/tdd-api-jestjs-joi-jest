import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'space_ship' })
export class SpaceShipEntity {
  @PrimaryColumn({ name: 'id' })
  spaceShipId: string;

  @Column({ name: 'name' })
  spaceShipName: string;

  @Column({ name: 'space_ship_number' })
  spaceShipNumber: number;

  @Column({ name: 'is_faster_than_light' })
  isFasterThanLight: boolean;

  @Column({ name: 'date_created', type: 'timestamp' })
  @CreateDateColumn()
  public dateCreated?: Date;
}
