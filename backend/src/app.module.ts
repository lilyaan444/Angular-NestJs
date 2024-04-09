import { Module } from '@nestjs/common';
import { DriversModule } from './drivers/drivers.module';
import { ConstructorsModule } from './constructors/constructors.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DriversModule, ConstructorsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
