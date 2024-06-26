import { Injectable } from '@nestjs/common';
import { StateEntity } from './entity/state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StateService {
    constructor(
        @InjectRepository(StateEntity)
        private readonly stateRepository : Repository<StateEntity>
    ){}

    async getAllStates():Promise<StateEntity[]>{
        return this.stateRepository.find();
    }
}
