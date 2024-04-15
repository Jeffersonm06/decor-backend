import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUsers.dto';

@Controller('user')
export class UserController {
    
  @Post()
  async createUser (@Body() createUser : CreateUserDto){
    return {
        ...createUser,
        password: "segredo"
    };
  }
}
