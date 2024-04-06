import { Module } from '@nestjs/common';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';
import { DriversFavoriteService } from './drivers-favorite/drivers-favorite.service';

@Module({
  controllers: [DriversController],
  providers: [DriversService, DriversFavoriteService]
})
export class DriversModule {}
