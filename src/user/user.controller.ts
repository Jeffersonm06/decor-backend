import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUsers.dto';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dtos';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}
    
  @UsePipes(ValidationPipe)  
  @Post()
  async createUser (@Body() createUser : CreateUserDto):Promise<UserEntity>{
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUsers():Promise<ReturnUserDto[]>{
    return (await this.userService.getAllUsers()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    )
  }
}
