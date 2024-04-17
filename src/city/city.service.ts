import { Inject, Injectable } from '@nestjs/common';
import { CityEntity } from './entity/city.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) { }

    async getAllCitiesByState(stateId:number): Promise<CityEntity[]> {
        const citiesCache: CityEntity[] = await this.cacheManager.get(`${stateId}`);

        if(citiesCache){
            return citiesCache;
        }

        const cities = await this.cityRepository.find({
            where:{
                stateId,
            }
        });

        return cities;
    }
}