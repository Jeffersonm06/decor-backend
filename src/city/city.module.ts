import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entity/city.entity';
import { CacheModule } from '../cache/cache.module'; // Importar CacheModule

@Module({
  imports: [
    TypeOrmModule.forFeature([CityEntity]),
    CacheModule,
  ],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService]
})
export class CityModule {}
