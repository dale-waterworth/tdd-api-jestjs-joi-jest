import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpaceShipModule } from './space-ship/space-ship.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpaceShipEntity } from './space-ship/space-ship-entity';

@Module({
  imports: [
    SpaceShipModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [SpaceShipEntity],
      synchronize: true,
      autoLoadEntities: true,
      keepConnectionAlive: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
