import { Test, TestingModule } from '@nestjs/testing';
import { SpaceShipRepository } from './space-ship-repository';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { SpaceShipEntity } from './space-ship-entity';
import { QueryFailedError, Repository } from 'typeorm';

describe('SpaceShipRepository', () => {
  let provider: SpaceShipRepository;
  let entity: Repository<SpaceShipEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          dropSchema: true,
          entities: [SpaceShipEntity],
          synchronize: true,
          autoLoadEntities: true,
          keepConnectionAlive: false,
        }),
        TypeOrmModule.forFeature([SpaceShipEntity]),
      ],
      providers: [SpaceShipRepository],
    }).compile();

    provider = module.get<SpaceShipRepository>(SpaceShipRepository);
    entity = module.get(getRepositoryToken(SpaceShipEntity));
  });

  afterEach(async () => {
    await entity.manager.connection.close();
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
    expect(entity).toBeDefined();
  });

  it('should save an entity', async () => {
    const spaceShipEntity: SpaceShipEntity = {
      isFasterThanLight: false,
      spaceShipName: 'some ship',
      spaceShipNumber: 0,
      spaceShipId: 'abc-000-ship',
    };

    const savedSpaceShip = await provider.save(spaceShipEntity);

    expect(savedSpaceShip).toBe(spaceShipEntity);
    expect(savedSpaceShip.dateCreated).toBeTruthy();
    const count = await entity.query(
      'select count(id) as rows from space_ship',
    );
    expect(count[0].rows).toBe(1);
  });

  it('should not save an entity and throw error', async () => {
    const spaceShipEntity: SpaceShipEntity = {} as SpaceShipEntity;

    const savedSpaceShip = () => provider.save(spaceShipEntity);

    await expect(savedSpaceShip).rejects.toThrow(QueryFailedError);
  });
});
