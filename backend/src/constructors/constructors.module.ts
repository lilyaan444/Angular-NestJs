import { Module } from '@nestjs/common';
import { ConstructorsController } from './constructors.controller';
import { ConstructorsService } from './constructors.service';
import { ConstructorsFavoriteService } from './constructors-favorite/constructors-favorite.service';

@Module({
  controllers: [ConstructorsController],
  providers: [ConstructorsService, ConstructorsFavoriteService]
})
export class ConstructorsModule {}
