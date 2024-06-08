import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CityEntity } from './entity/city.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        private readonly cacheService: CacheService,
    ) { }

    async getAllCitiesByState(stateId: number): Promise<CityEntity[]> {
        return this.cacheService.getCache<CityEntity[]>(`state_${stateId}`, () =>
            this.cityRepository.find({
                where: {
                    stateId,
                },
            }),
        );
    }

    async findCityById(cityId: number): Promise<CityEntity> {
        const city = await this.cityRepository.findOne({
            where: {
                id: cityId
            }
        });

        if (!city) {
            throw new NotFoundException(`CityID ${cityId} not found`);
        }
        return city;
    }
}
