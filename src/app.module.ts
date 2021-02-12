import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpaceShipModule } from './space-ship/space-ship.module';

@Module({
  imports: [SpaceShipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
