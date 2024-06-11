import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dtos/login.dto';
import { UserEntity } from 'src/user/entity/user.entity';
import { compare } from 'bcrypt';
import { ReturnLoginDto } from './dtos/returnLogin.dto';
import { JwtService } from '@nestjs/jwt';
import { ReturnUserDto } from 'src/user/dtos/returnUser.dtos';
import { LoginPayload } from './dtos/loginPayload.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) { }

    async login(loginDto: LoginDto): Promise<ReturnLoginDto> {
        const user: UserEntity | undefined = await this.userService
            .findUserByEmail(loginDto.email)
            .catch(() => undefined);

        const isMatch = await compare(loginDto.password, user?.password || '');

        if (!user || !isMatch) {
            throw new NotFoundException('Email or password invalid')
        }

        return {
            access_token: await this.jwtService.signAsync({...new LoginPayload(user)}),
            user: new ReturnUserDto(user),
        };
    }
}
