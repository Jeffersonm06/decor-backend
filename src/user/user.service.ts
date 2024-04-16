import { Injectable } from '@nestjs/common';
import { UserEntity } from './interfaces/user.entity';
import { CreateUserDto } from './dtos/createUsers.dto';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository : Repository<UserEntity>
    ){}

    async createUser(createUser: CreateUserDto): Promise<UserEntity> {

        const saltOrRounds = 10;

        const passwordHashed = await hash(createUser.password, saltOrRounds);

        return this.userRepository.save({
            ...createUser,
            typeUser: 1,
            password: passwordHashed
        })
    }

    async getAllUsers(): Promise<UserEntity[]>{
        return this.userRepository.find();
    }
}
