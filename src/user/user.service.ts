import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { CreateUserDto } from './dtos/createUsers.dto';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    async createUser(createUser: CreateUserDto): Promise<UserEntity> {

        const saltOrRounds = 10;

        const passwordHashed = await hash(createUser.password, saltOrRounds);

        return this.userRepository.save({
            ...createUser,
            typeUser: 1,
            password: passwordHashed
        })
    }

    async getUserByIdUsingRelations(userId: number): Promise<UserEntity> {
        return this.userRepository.findOne({
            where: {
                id: userId
            },
            relations: {
                addresses: {
                    city: {
                        state: true
                    }
                }
            }
        })
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    async findUserById(userId: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: {
                id: userId
            },
        });

        if (!user) {
            throw new NotFoundException(`UserID ${userId} not found`)
        }
        return user;
    }

    async findUserByEmail(email: string): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: {
                email: email
            },
        });

        if (!user) {
            throw new NotFoundException(`Email ${email} not found`)
        }
        return user;
    }
}
