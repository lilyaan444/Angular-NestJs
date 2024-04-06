import { Module } from '@nestjs/common';
import { DriversModule } from './drivers/drivers.module';
import { ConstructorsModule } from './constructors/constructors.module';

@Module({
  imports: [DriversModule, ConstructorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
